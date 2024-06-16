<?php

namespace App\Http\Controllers;

use App\Models\Pembelian;
use App\Models\Produk;
use Illuminate\Http\Request;

class PesananController extends Controller
{
    // ------------------------------------------------------------------------- admin
    public function index() {
        $title = 'Informasi Penjualan';
        $semua_pesanan = Pembelian::orderby('created_at')->get();
        return view('pages.admin.penjualan', compact('title', 'semua_pesanan'));
    }
        
    public function show($id) {
        $title = 'Informasi Penjualan';
        $sub_title = 'Detail Informasi';
        $pesanan = Pembelian::find($id);
        return view('pages.admin.penjualan-detail', compact('title', 'sub_title', 'pesanan'));
    }

    public function edit_data_kemas($id) {
        $pesanan = Pembelian::find($id);
        $pesanan->update([
            'status_pesanan' => 'dikemas',
        ]);

        return redirect('/penjualan')->with('success', 'Status Pesanan Berhasil Diperbarui !');
        
    }
    public function edit_data_kirim($id) {
        $pesanan = Pembelian::find($id);
        $pesanan->update([
            'status_pesanan' => 'dikirim',
        ]);

        return redirect('/penjualan')->with('success', 'Status Pesanan Berhasil Diperbarui !');
    }

    // ------------------------------------------------------------------------- user
    public function store(Request $request) {
        // dd($request);
        $request->validate([
            'jumlah' => 'required',
            'total' => 'required',
            'alamat' => 'required',
            'metode_pembayaran' => 'required',
        ]);

        $produk = Produk::find($request->produk_id);

        $pemesanan = new Pembelian();
        $pemesanan->user_id = auth()->user()->id;
        $pemesanan->produk_id = $produk->id;
        $pemesanan->harga = $produk->harga;
        $pemesanan->jumlah = $request->jumlah;
        $pemesanan->total = $request->total;
        $pemesanan->alamat = $request->alamat;
        $pemesanan->pesan = $request->pesan;
        $pemesanan->metode_pembayaran = $request->metode_pembayaran;
        $pemesanan->status_pembayaran = 'belum bayar';
        $pemesanan->status_pesanan = 'menunggu pembayaran';

        if ($pemesanan->save()) {
            $produk->decrement('stok', $request->jumlah);
            return redirect('/pesanan')->with('success', 'Data berhasil disimpan!');
        } else {
            return redirect('/pesanan')->with('error', 'Gagal menyimpan data');
        }
    }

    public function update($id, Request $request) {
        $request->validate([
            'bukti_pembayaran' => 'required',
        ]);

        $pesanan = Pembelian::find($id);
        $data = $request->except('token', 'submit', 'bukti_pembayaran');

        $image = $request->file('bukti_pembayaran');
        $imageName = $pesanan->created_at->format('ymdHis') . '_' . $pesanan->produk->nama_produk . '_' . auth()->user()->name . '.' . $image->extension();
        $image->move(public_path('assets/img/bukti-pembayaran/'), $imageName);
        $data['bukti_pembayaran'] = $imageName;

        $pesanan->update([
            'bukti_pembayaran' => $imageName,
            'status_pembayaran' => 'sudah bayar',
        ]);

        return redirect('/pesanan')->with('success', 'Bukti pembayaran berhasil diunggah!');
    }

    public function edit_data_terima($id) {
        $pesanan = Pembelian::find($id);
        $pesanan->update([
            'status_pesanan' => 'selesai',
        ]);

        return redirect('/pesanan#selesai')->with('success', 'Status Pesanan Berhasil Diperbarui !');
    }

    
    public function payment_cancel($id) {
        $pesanan = Pembelian::find($id);
        $pesanan->update([
            'status_pesanan' => 'dibatalkan',
        ]);

        return redirect('/pesanan#dibatalkan')->with('success', 'Status Pesanan Berhasil Diperbarui !');
    }

}
