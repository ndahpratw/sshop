<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('produks', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('toko_id')->constrained('pabriks','id')->onUpdate('cascade')->onDelete('restrict');
            $table->foreignUuid('kategori_id')->constrained('kategori_produks','id')->onUpdate('cascade')->onDelete('restrict');
            $table->string('nama_produk');
            $table->string('foto_produk')->nullable();
            $table->integer('harga');
            $table->integer('stok');
            $table->text('deskripsi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produks');
    }
};
