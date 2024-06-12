<?php

namespace App\Http\Controllers;

use App\Models\Pembelian;
use App\Models\RatingProduk;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    // ------------------------------------------------------------------------- user
    public function create($id) {
        $title = 'Informasi Penjualan';
        $sub_title = 'Detail Informasi';
        $pesanan = Pembelian::find($id);
        return view('pages.user.pesanan-rating', compact('title', 'sub_title', 'pesanan'));
    }

    public function store(Request $request) {
        $rating = new RatingProduk();
        $rating->pembelian_id = $request->produk_id;
        $rating->user_id = auth()->user()->id;
        $rating->rating = $request->rating;
        $rating->ulasan = $request->testimoni;

        if ($rating->save()) {
            return redirect('/pesanan')->with('success', 'Ulasan telah ditambahkan !');
        } else {
            return redirect('/pesanan')->with('error', 'Gagal menyimpan ulasan');
        }

    }
    // ------------------------------------------------------------------------- admin
}
