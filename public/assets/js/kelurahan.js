document.getElementById("kecamatan").addEventListener("change", kecamatan);

function kecamatan() {
    const kecamatan = document.getElementById("kecamatan").value;
    const kelurahanSelect = document.getElementById("kelurahan");
    kelurahanSelect.innerHTML = '<option selected disabled>Pilih Kelurahan</option>'; // Reset options

    if (kecamatan === 'AROSBAYA') {
        kelurahanSelect.innerHTML += `
            <option value="AROSBAYA" {{ old('kelurahan') == 'AROSBAYA' ? 'selected' : '' }}>Arosbaya</option>
            <option value="BALUNG" {{ old('kelurahan') == 'BALUNG' ? 'selected' : '' }}>Balung</option>
            <option value="BATONAONG" {{ old('kelurahan') == 'BATONAONG' ? 'selected' : '' }}>Batonaong</option>
            <option value="BERBELUK" {{ old('kelurahan') == 'BERBELUK' ? 'selected' : '' }}>Berbeluk</option>
            <option value="BUDURAN" {{ old('kelurahan') == 'BUDURAN' ? 'selected' : '' }}>Buduran</option>
            <option value="CENDAGAH" {{ old('kelurahan') == 'CENDAGAH' ? 'selected' : '' }}>Cendagah</option>
            <option value="DLEMER" {{ old('kelurahan') == 'DLEMER' ? 'selected' : '' }}>Dlemer</option>
            <option value="GLAGGA" {{ old('kelurahan') == 'GLAGGA' ? 'selected' : '' }}>Glagga</option>
            <option value="KARANG DUWAK" {{ old('kelurahan') == 'KARANG DUWAK' ? 'selected' : '' }}>Karang Duwak</option>
            <option value="KARANG PAO" {{ old('kelurahan') == 'KARANG PAO' ? 'selected' : '' }}>Karang Pao</option>
            <option value="LAJING" {{ old('kelurahan') == 'LAJING' ? 'selected' : '' }}>Lajing</option>
            <option value="MAKAM AGUNG" {{ old('kelurahan') == 'MAKAM AGUNG' ? 'selected' : '' }}>Makam Agung</option>
            <option value="MANGKON" {{ old('kelurahan') == 'MANGKON' ? 'selected' : '' }}>Mangkon</option>
            <option value="OMBUL" {{ old('kelurahan') == 'OMBUL' ? 'selected' : '' }}>Ombul</option>
            <option value="PANDAN LANJANG" {{ old('kelurahan') == 'PANDAN LANJANG' ? 'selected' : '' }}>Pandan Lanjang</option>
            <option value="PLAKARAN" {{ old('kelurahan') == 'PLAKARAN' ? 'selected' : '' }}>Plakaran</option>
            <option value="TAMBEGAN" {{ old('kelurahan') == 'TAMBEGAN' ? 'selected' : '' }}>Tambegan</option>
            <option value="TENGKET" {{ old('kelurahan') == 'TENGKET' ? 'selected' : '' }}>Tengket</option>
        `;
    } else if(kecamatan == 'BANGKALAN') {
        kelurahanSelect.innerHTML += `
            <option value="MLAJAH" {{ old('kelurahan') == 'MLAJAH' ? 'selected' : '' }}>Mlajah</option>
            <option value="KEMAYORAN" {{ old('kelurahan') == 'KEMAYORAN' ? 'selected' : '' }}>Kemayoran</option>
            <option value="PANGERANAN" {{ old('kelurahan') == 'PANGERANAN' ? 'selected' : '' }}>Pangeranan</option>
            <option value="DEMANGAN" {{ old('kelurahan') == 'DEMANGAN' ? 'selected' : '' }}>Demangan</option>
            <option value="KRATON" {{ old('kelurahan') == 'KRATON' ? 'selected' : '' }}>Kraton</option>
            <option value="PEJAGAN" {{ old('kelurahan') == 'PEJAGAN' ? 'selected' : '' }}>Pejagan</option>
            <option value="BANCARAN" {{ old('kelurahan') == 'BANCARAN' ? 'selected' : '' }}>Bancaran</option>
            <option value="SEMBILANGAN" {{ old('kelurahan') == 'SEMBILANGAN' ? 'selected' : '' }}>Desa Sembilangan</option>
            <option value="UJUNG PIRING" {{ old('kelurahan') == 'UJUNG PIRING' ? 'selected' : '' }}>Desa Ujung Piring</option>
            <option value="KRAMAT" {{ old('kelurahan') == 'KRAMAT' ? 'selected' : '' }}>Desa Kramat</option>
            <option value="MARTAJASAH" {{ old('kelurahan') == 'MARTAJASAH' ? 'selected' : '' }}>Desa Martajasah</option>
            <option value="SABIYAN" {{ old('kelurahan') == 'SABIYAN' ? 'selected' : '' }}>Desa Sabiyan</option>
            <option value="GEBANG" {{ old('kelurahan') == 'GEBANG' ? 'selected' : '' }}>Desa Gebang</option>
        `;
    } else if(kecamatan == 'BLEGA') {
        kelurahanSelect.innerHTML += `
            <option value="ALAS KEMBANG" {{ old('kelurahan') == 'ALAS KEMBANG' ? 'selected' : '' }}>Alas Kembang</option>
            <option value="AROK" {{ old('kelurahan') == 'AROK' ? 'selected' : '' }}>Arok</option>
            <option value="BANANGKAH" {{ old('kelurahan') == 'BANANGKAH' ? 'selected' : '' }}>Banangkah</option>
            <option value="BINOH" {{ old('kelurahan') == 'BINOH' ? 'selected' : '' }}>Binoh</option>
            <option value="BURNEH" {{ old('kelurahan') == 'BURNEH' ? 'selected' : '' }}>Burneh</option>
            <option value="JAMBUH" {{ old('kelurahan') == 'JAMBUH' ? 'selected' : '' }}>Jambuh</option>
            <option value="KAPOR" {{ old('kelurahan') == 'KAPOR' ? 'selected' : '' }}>Kapor</option>
            <option value="LANGKAP" {{ old('kelurahan') == 'LANGKAP' ? 'selected' : '' }}>Langkap</option>
            <option value="PANGOLANGAN" {{ old('kelurahan') == 'PANGOLANGAN' ? 'selected' : '' }}>Pangolangan</option>
            <option value="PERRENG" {{ old('kelurahan') == 'PERRENG' ? 'selected' : '' }}>Perreng</option>
            <option value="SOBIH" {{ old('kelurahan') == 'SOBIH' ? 'selected' : '' }}>Sobih</option>
            <option value="TUNJUNG" {{ old('kelurahan') == 'TUNJUNG' ? 'selected' : '' }}>Tunjung</option>
        `;
    } else if(kecamatan == 'BURNEH') {
        kelurahanSelect.innerHTML += `
            <option value="ALAS KEMBANG" {{ old('kelurahan') == 'ALAS KEMBANG' ? 'selected' : '' }}>Alas Kembang</option>
            <option value="AROK" {{ old('kelurahan') == 'AROK' ? 'selected' : '' }}>Arok</option>
            <option value="BANANGKAH" {{ old('kelurahan') == 'BANANGKAH' ? 'selected' : '' }}>Banangkah</option>
            <option value="BINOH" {{ old('kelurahan') == 'BINOH' ? 'selected' : '' }}>Binoh</option>
            <option value="BURNEH" {{ old('kelurahan') == 'BURNEH' ? 'selected' : '' }}>Burneh</option>
            <option value="JAMBUH" {{ old('kelurahan') == 'JAMBUH' ? 'selected' : '' }}>Jambuh</option>
            <option value="KAPOR" {{ old('kelurahan') == 'KAPOR' ? 'selected' : '' }}>Kapor</option>
            <option value="LANGKAP" {{ old('kelurahan') == 'LANGKAP' ? 'selected' : '' }}>Langkap</option>
            <option value="PANGOLANGAN" {{ old('kelurahan') == 'PANGOLANGAN' ? 'selected' : '' }}>Pangolangan</option>
            <option value="PERRENG" {{ old('kelurahan') == 'PERRENG' ? 'selected' : '' }}>Perreng</option>
            <option value="SOBIH" {{ old('kelurahan') == 'SOBIH' ? 'selected' : '' }}>Sobih</option>
            <option value="TUNJUNG" {{ old('kelurahan') == 'TUNJUNG' ? 'selected' : '' }}>Tunjung</option>
        `;
    } else if(kecamatan == 'GALIS') {
        kelurahanSelect.innerHTML += `
        <option value="BANGPENDAH" {{ old('kelurahan') == 'BANGPENDAH' ? 'selected' : '' }}>Bangpendah</option>
        <option value="BANJAR" {{ old('kelurahan') == 'BANJAR' ? 'selected' : '' }}>Banjar</option>
        <option value="BANYU BUNIH" {{ old('kelurahan') == 'BANYU BUNIH' ? 'selected' : '' }}>Banyu Bunih</option>
        <option value="BLATERAN" {{ old('kelurahan') == 'BLATERAN' ? 'selected' : '' }}>Blateran</option>
        <option value="DALEMAN" {{ old('kelurahan') == 'DALEMAN' ? 'selected' : '' }}>Daleman</option>
        <option value="GALIS" {{ old('kelurahan') == 'GALIS' ? 'selected' : '' }}>Galis</option>
        <option value="KAJUANAK" {{ old('kelurahan') == 'KAJUANAK' ? 'selected' : '' }}>Kajuanak</option>
        <option value="KELBUNG" {{ old('kelurahan') == 'KELBUNG' ? 'selected' : '' }}>Kelbung</option>
        <option value="KRANGGAN TIMUR" {{ old('kelurahan') == 'KRANGGAN TIMUR' ? 'selected' : '' }}>Krgangan Timur</option>
        <option value="LANTEK BARAT" {{ old('kelurahan') == 'LANTEK BARAT' ? 'selected' : '' }}>Lantek Barat</option>
        <option value="LANTEK TIMUR" {{ old('kelurahan') == 'LANTEK TIMUR' ? 'selected' : '' }}>Lantek Timur</option>
        <option value="LONGKEK" {{ old('kelurahan') == 'LONGKEK' ? 'selected' : '' }}>Longkek</option>
        <option value="PAKAAN DAJAH" {{ old('kelurahan') == 'PAKAAN DAJAH' ? 'selected' : '' }}>Paka'an Dajah</option>
        <option value="PAKAAN LAOK" {{ old('kelurahan') == 'PAKAAN LAOK' ? 'selected' : '' }}>Paka'an Laok</option>
        <option value="PATERONGAN" {{ old('kelurahan') == 'PATERONGAN' ? 'selected' : '' }}>Paterongan</option>
        <option value="PEKADAN" {{ old('kelurahan') == 'PEKADAN' ? 'selected' : '' }}>Pekadan</option>
        <option value="SADAH" {{ old('kelurahan') == 'SADAH' ? 'selected' : '' }}>Sadah</option>
        <option value="SEPARAH" {{ old('kelurahan') == 'SEPARAH' ? 'selected' : '' }}>Separah</option>
        <option value="SORPA" {{ old('kelurahan') == 'SORPA' ? 'selected' : '' }}>Sorpa</option>
        <option value="TELLOK" {{ old('kelurahan') == 'TELLOK' ? 'selected' : '' }}>Tellok</option>
        <option value="TLAGAH" {{ old('kelurahan') == 'TLAGAH' ? 'selected' : '' }}>Tlagah</option>
        `;
    } else if(kecamatan == 'GEGER') {
        kelurahanSelect.innerHTML += `
        <option value="BATO BELLA" {{ old('kelurahan') == 'BATO BELLA' ? 'selected' : '' }}>Batobella</option>
        <option value="BAYONENG DA" {{ old('kelurahan') == 'BAYONENG DA' ? 'selected' : '' }}>Bayoneng Daja</option>
        <option value="BAYONENG LAOK" {{ old('kelurahan') == 'BAYONENG LAOK' ? 'selected' : '' }}>Bayoneng Laok</option>
        <option value="CAMPOR" {{ old('kelurahan') == 'CAMPOR' ? 'selected' : '' }}>Campor</option>
        <option value="DABUNG" {{ old('kelurahan') == 'DABUNG' ? 'selected' : '' }}>Dabung</option>
        <option value="GEGERR" {{ old('kelurahan') == 'GEGERR' ? 'selected' : '' }}>Geger</option>
        <option value="KAMPAK" {{ old('kelurahan') == 'KAMPAK' ? 'selected' : '' }}>Kampak</option>
        <option value="KATOL BARAT" {{ old('kelurahan') == 'KATOL BARAT' ? 'selected' : '' }}>Katol Barat</option>
        <option value="KOMBANGAN" {{ old('kelurahan') == 'KOMBANGAN' ? 'selected' : '' }}>Kombangan</option>
        <option value="KOMPOL" {{ old('kelurahan') == 'KOMPOL' ? 'selected' : '' }}>Kompol</option>
        <option value="LERPAK" {{ old('kelurahan') == 'LERPAK' ? 'selected' : '' }}>Lerpak</option>
        <option value="TEGAR PRIYAH" {{ old('kelurahan') == 'TEGAR PRIYAH' ? 'selected' : '' }}>Tegar Priyah</option>
        <option value="TOGUBANG" {{ old('kelurahan') == 'TOGUBANG' ? 'selected' : '' }}>Togubang</option>
        `;
    } else if(kecamatan == 'KAMAL') {
        kelurahanSelect.innerHTML += `
            <option value="BANYUAJUH" {{ old('kelurahan') == 'BANYUAJUH' ? 'selected' : '' }}>Banyuajuh</option>
            <option value="GILI ANYAR" {{ old('kelurahan') == 'GILI ANYAR' ? 'selected' : '' }}>Gili Anyar</option>
            <option value="GILI BARAT" {{ old('kelurahan') == 'GILI BARAT' ? 'selected' : '' }}>Gili Barat</option>
            <option value="GILI TIMUR" {{ old('kelurahan') == 'GILI TIMUR' ? 'selected' : '' }}>Gili Timur</option>
            <option value="KAMAL" {{ old('kelurahan') == 'KAMAL' ? 'selected' : '' }}>Kamal</option>
            <option value="KEBUN" {{ old('kelurahan') == 'KEBUN' ? 'selected' : '' }}>Kebun</option>
            <option value="PENDABAH" {{ old('kelurahan') == 'PENDABAH' ? 'selected' : '' }}>Pendabah</option>
            <option value="TAJUNGAN" {{ old('kelurahan') == 'TAJUNGAN' ? 'selected' : '' }}>Tajungan</option>
            <option value="TANJUNG JATI" {{ old('kelurahan') == 'TANJUNG JATI' ? 'selected' : '' }}>Tanjung Jati</option>
            <option value="TELANG" {{ old('kelurahan') == 'TELANG' ? 'selected' : '' }}>Telang</option>

        `;
    } else if(kecamatan == 'KLAMPIS') {
        kelurahanSelect.innerHTML += `
            <option value="BANTEYAN" {{ old('kelurahan') == 'BANTEYAN' ? 'selected' : '' }}>Banteyan</option>
            <option value="BATOR" {{ old('kelurahan') == 'BATOR' ? 'selected' : '' }}>Bator</option>
            <option value="BRAGANG" {{ old('kelurahan') == 'BRAGANG' ? 'selected' : '' }}>Bragang</option>
            <option value="BULUKAGUNG" {{ old('kelurahan') == 'BULUKAGUNG' ? 'selected' : '' }}>Bulukagung</option>
            <option value="BULUNG" {{ old('kelurahan') == 'BULUNG' ? 'selected' : '' }}>Bulung</option>
            <option value="KARANGASEM" {{ old('kelurahan') == 'KARANGASEM' ? 'selected' : '' }}>Karangasem</option>
            <option value="KLAMPIS BARAT" {{ old('kelurahan') == 'KLAMPIS BARAT' ? 'selected' : '' }}>Klampis Barat</option>
            <option value="KLAMPIS TIMUR" {{ old('kelurahan') == 'KLAMPIS TIMUR' ? 'selected' : '' }}>Klampis Timur</option>
            <option value="KO'OL" {{ old('kelurahan') == 'KO\'OL' ? 'selected' : '' }}>Ko'ol</option>
            <option value="LARANGAN GLINTONG" {{ old('kelurahan') == 'LARANGAN GLINTONG' ? 'selected' : '' }}>Larangan Glintong</option>
            <option value="LARANGAN SORJAN" {{ old('kelurahan') == 'LARANGAN SORJAN' ? 'selected' : '' }}>Larangan Sorjan</option>
            <option value="LERGUNONG" {{ old('kelurahan') == 'LERGUNONG' ? 'selected' : '' }}>Lergunong</option>
            <option value="MANONGGAL" {{ old('kelurahan') == 'MANONGGAL' ? 'selected' : '' }}>Manonggal</option>
            <option value="MOARAH" {{ old('kelurahan') == 'MOARAH' ? 'selected' : '' }}>Moarah</option>
            <option value="MRANDUNG" {{ old('kelurahan') == 'MRANDUNG' ? 'selected' : '' }}>Mrandung</option>
            <option value="PANYAKSAGAN" {{ old('kelurahan') == 'PANYAKSAGAN' ? 'selected' : '' }}>Panyaksagan</option>
            <option value="POLONGAN" {{ old('kelurahan') == 'POLONGAN' ? 'selected' : '' }}>Polongan</option>
            <option value="RA'AS" {{ old('kelurahan') == 'RA\'AS' ? 'selected' : '' }}>Ra'as</option>
            <option value="TENGGUN DAJA" {{ old('kelurahan') == 'TENGGUN DAJA' ? 'selected' : '' }}>Tenggun Daja</option>
            <option value="TOBADDUNG" {{ old('kelurahan') == 'TOBADDUNG' ? 'selected' : '' }}>Tobaddung</option>
            <option value="TOLBUK" {{ old('kelurahan') == 'TOLBUK' ? 'selected' : '' }}>Tolbuk</option>
            <option value="TROGAN" {{ old('kelurahan') == 'TROGAN' ? 'selected' : '' }}>Trogan</option>
        `;
    } else if(kecamatan == 'KOKOP') {
        kelurahanSelect.innerHTML += `
            <option value="AMPARA'AN" {{ old('kelurahan') == 'AMPARA\'AN' ? 'selected' : '' }}>Ampara'an</option>
            <option value="BANDANG LAOK" {{ old('kelurahan') == 'BANDANG LAOK' ? 'selected' : '' }}>Bandang Laok</option>
            <option value="BANDASOLEH" {{ old('kelurahan') == 'BANDASOLEH' ? 'selected' : '' }}>Bandasoleh</option>
            <option value="BATOKOROGAN" {{ old('kelurahan') == 'BATOKOROGAN' ? 'selected' : '' }}>Batokorogan</option>
            <option value="DUPOK" {{ old('kelurahan') == 'DUPOK' ? 'selected' : '' }}>Dupok</option>
            <option value="DURJAN" {{ old('kelurahan') == 'DURJAN' ? 'selected' : '' }}>Durjan</option>
            <option value="KATOL TIMUR" {{ old('kelurahan') == 'KATOL TIMUR' ? 'selected' : '' }}>Katol Timur</option>
            <option value="KOKOP" {{ old('kelurahan') == 'KOKOP' ? 'selected' : '' }}>Kokop</option>
            <option value="LEMBUNG GUNONG" {{ old('kelurahan') == 'LEMBUNG GUNONG' ? 'selected' : '' }}>Lembung Gunong</option>
            <option value="MANDUNG" {{ old('kelurahan') == 'MANDUNG' ? 'selected' : '' }}>Mandung</option>
            <option value="MANO'AN" {{ old('kelurahan') == 'MANO\'AN' ? 'selected' : '' }}>Mano'an</option>
            <option value="TLOKOH" {{ old('kelurahan') == 'TLOKOH' ? 'selected' : '' }}>Tlokoh</option>
            <option value="TRAMOK" {{ old('kelurahan') == 'TRAMOK' ? 'selected' : '' }}>Tramok</option>
        `;
    } else if(kecamatan == 'KONANG') {
        kelurahanSelect.innerHTML += `
            <option value="BANDUNG" {{ old('kelurahan') == 'BANDUNG' ? 'selected' : '' }}>Bandung</option>
            <option value="BATOKABAN" {{ old('kelurahan') == 'BATOKABAN' ? 'selected' : '' }}>Batokaban</option>
            <option value="CAMPOR" {{ old('kelurahan') == 'CAMPOR' ? 'selected' : '' }}>Campor</option>
            <option value="CANGKAREMAN" {{ old('kelurahan') == 'CANGKAREMAN' ? 'selected' : '' }}>Cangkareman</option>
            <option value="DURIN BARAT" {{ old('kelurahan') == 'DURIN BARAT' ? 'selected' : '' }}>Durin Barat</option>
            <option value="DURIN TIMUR" {{ old('kelurahan') == 'DURIN TIMUR' ? 'selected' : '' }}>Durin Timur</option>
            <option value="GALIS DAJAH" {{ old('kelurahan') == 'GALIS DAJAH' ? 'selected' : '' }}>Galis Dajah</option>
            <option value="GENTENG" {{ old('kelurahan') == 'GENTENG' ? 'selected' : '' }}>Genteng</option>
            <option value="KANEGARAH" {{ old('kelurahan') == 'KANEGARAH' ? 'selected' : '' }}>Kanegarah</option>
            <option value="KONANG" {{ old('kelurahan') == 'KONANG' ? 'selected' : '' }}>Konang</option>
            <option value="PAKES" {{ old('kelurahan') == 'PAKES' ? 'selected' : '' }}>Pakes</option>
            <option value="SAMBIYAN" {{ old('kelurahan') == 'SAMBIYAN' ? 'selected' : '' }}>Sambiyan</option>
            <option value="SEN ASEN" {{ old('kelurahan') == 'SEN ASEN' ? 'selected' : '' }}>Sen Asen</option>
        `;
    } else if(kecamatan == 'KWANYAR') {
        kelurahanSelect.innerHTML += `
            <option value="BATAH BARAT" {{ old('kelurahan') == 'BATAH BARAT' ? 'selected' : '' }}>Batah Barat</option>
            <option value="BATAH TIMUR" {{ old('kelurahan') == 'BATAH TIMUR' ? 'selected' : '' }}>Batah Timur</option>
            <option value="DLEMER" {{ old('kelurahan') == 'DLEMER' ? 'selected' : '' }}>Dlemer</option>
            <option value="DUWEK BUTER" {{ old('kelurahan') == 'DUWEK BUTER' ? 'selected' : '' }}>Duwek Buter</option>
            <option value="GUNUNG SERENG" {{ old('kelurahan') == 'GUNUNG SERENG' ? 'selected' : '' }}>Gunung Sereng</option>
            <option value="JANTEH" {{ old('kelurahan') == 'JANTEH' ? 'selected' : '' }}>Janteh</option>
            <option value="KARANG ANYAR" {{ old('kelurahan') == 'KARANG ANYAR' ? 'selected' : '' }}>Karang Anyar</option>
            <option value="KARANG ENTANG" {{ old('kelurahan') == 'KARANG ENTANG' ? 'selected' : '' }}>Karang Entang</option>
            <option value="KETETANG" {{ old('kelurahan') == 'KETETANG' ? 'selected' : '' }}>Ketetang</option>
            <option value="KWANYAR BARAT" {{ old('kelurahan') == 'KWANYAR BARAT' ? 'selected' : '' }}>Kwanyar Barat</option>
            <option value="MOROMBUH" {{ old('kelurahan') == 'MOROMBUH' ? 'selected' : '' }}>Morombuh</option>
            <option value="PANDANAN" {{ old('kelurahan') == 'PANDANAN' ? 'selected' : '' }}>Pandanan</option>
            <option value="PAORAN" {{ old('kelurahan') == 'PAORAN' ? 'selected' : '' }}>Paoran</option>
            <option value="PESANGGRAHAN" {{ old('kelurahan') == 'PESANGGRAHAN' ? 'selected' : '' }}>Pesanggrahan</option>
            <option value="SOMOR KONENG" {{ old('kelurahan') == 'SOMOR KONENG' ? 'selected' : '' }}>Somor Koneng</option>
            <option value="TEBUL" {{ old('kelurahan') == 'TEBUL' ? 'selected' : '' }}>Tebul</option>
        `;
    } else if(kecamatan == 'LABANG') {
        kelurahanSelect.innerHTML += `
            <option value="BA'ENGAS" {{ old('kelurahan') == 'BA\'ENGAS' ? 'selected' : '' }}>Ba'engas</option>
            <option value="BRINGEN" {{ old('kelurahan') == 'BRINGEN' ? 'selected' : '' }}>Bringen</option>
            <option value="BUNAJIH" {{ old('kelurahan') == 'BUNAJIH' ? 'selected' : '' }}>Bunajih</option>
            <option value="JUKONG" {{ old('kelurahan') == 'JUKONG' ? 'selected' : '' }}>Jukong</option>
            <option value="KESEK" {{ old('kelurahan') == 'KESEK' ? 'selected' : '' }}>Kesek</option>
            <option value="LABANG" {{ old('kelurahan') == 'LABANG' ? 'selected' : '' }}>Labang</option>
            <option value="MORKEPEK" {{ old('kelurahan') == 'MORKEPEK' ? 'selected' : '' }}>Morkepek</option>
            <option value="PANGPONG" {{ old('kelurahan') == 'PANGPONG' ? 'selected' : '' }}>Pangpong</option>
            <option value="PETAPAN" {{ old('kelurahan') == 'PETAPAN' ? 'selected' : '' }}>Petapan</option>
            <option value="SENDANG DAJA" {{ old('kelurahan') == 'SENDANG DAJA' ? 'selected' : '' }}>Sendang Daja</option>
            <option value="SENDANG LAOK" {{ old('kelurahan') == 'SENDANG LAOK' ? 'selected' : '' }}>Sendang Laok</option>
            <option value="SUKOLILO BARAT" {{ old('kelurahan') == 'SUKOLILO BARAT' ? 'selected' : '' }}>Sukolilo Barat</option>
            <option value="SUKOLILO TIMUR" {{ old('kelurahan') == 'SUKOLILO TIMUR' ? 'selected' : '' }}>Sukolilo Timur</option>
        `;
    } else if(kecamatan == 'MODUNG') {
        kelurahanSelect.innerHTML += `
            <option value="ALAS KOKON" {{ old('kelurahan') == 'ALAS KOKON' ? 'selected' : '' }}>Alas Kokon</option>
            <option value="BRAKAS DAJAH" {{ old('kelurahan') == 'BRAKAS DAJAH' ? 'selected' : '' }}>Brakas Dajah</option>
            <option value="GLISGIS" {{ old('kelurahan') == 'GLISGIS' ? 'selected' : '' }}>Glisgis</option>
            <option value="KARANG ANYAR" {{ old('kelurahan') == 'KARANG ANYAR' ? 'selected' : '' }}>Karang Anyar</option>
            <option value="KOLLA" {{ old('kelurahan') == 'KOLLA' ? 'selected' : '' }}>Kolla</option>
            <option value="LANGPANGGANG" {{ old('kelurahan') == 'LANGPANGGANG' ? 'selected' : '' }}>Langpanggang</option>
            <option value="MANGGAAN" {{ old('kelurahan') == 'MANGGAAN' ? 'selected' : '' }}>Manggaan</option>
            <option value="MODUNG" {{ old('kelurahan') == 'MODUNG' ? 'selected' : '' }}>Modung</option>
            <option value="NEROH" {{ old('kelurahan') == 'NEROH' ? 'selected' : '' }}>Neroh</option>
            <option value="PAENG" {{ old('kelurahan') == 'PAENG' ? 'selected' : '' }}>Paeng</option>
            <option value="PAKONG" {{ old('kelurahan') == 'PAKONG' ? 'selected' : '' }}>Pakong</option>
            <option value="PANGPAJUNG" {{ old('kelurahan') == 'PANGPAJUNG' ? 'selected' : '' }}>Pangpajung</option>
            <option value="PATENGTENG" {{ old('kelurahan') == 'PATENGTENG' ? 'selected' : '' }}>Patengteng</option>
            <option value="PATEREMAN" {{ old('kelurahan') == 'PATEREMAN' ? 'selected' : '' }}>Patereman</option>
            <option value="SRABI BARAT" {{ old('kelurahan') == 'SRABI BARAT' ? 'selected' : '' }}>Srabi Barat</option>
            <option value="SRABI TIMUR" {{ old('kelurahan') == 'SRABI TIMUR' ? 'selected' : '' }}>Srabi Timur</option>
            <option value="SUWA'AN" {{ old('kelurahan') == 'SUWA\'AN' ? 'selected' : '' }}>Suwa'an</option>
        `;
    } else if(kecamatan == 'SEPULU') {
        kelurahanSelect.innerHTML += `
            <option value="BANGSEREH" {{ old('kelurahan') == 'BANGSEREH' ? 'selected' : '' }}>Bangsereh</option>
            <option value="BANYIOR" {{ old('kelurahan') == 'BANYIOR' ? 'selected' : '' }}>Banyior</option>
            <option value="GANGSEYAN" {{ old('kelurahan') == 'GANGSEYAN' ? 'selected' : '' }}>Gangseyan</option>
            <option value="GENELAP" {{ old('kelurahan') == 'GENELAP' ? 'selected' : '' }}>Genelap</option>
            <option value="KELBUNG" {{ old('kelurahan') == 'KELBUNG' ? 'selected' : '' }}>Kelbung</option>
            <option value="KLABETAN" {{ old('kelurahan') == 'KLABETAN' ? 'selected' : '' }}>Klabetan</option>
            <option value="KLAPAYAN" {{ old('kelurahan') == 'KLAPAYAN' ? 'selected' : '' }}>Klapayan</option>
            <option value="LABUHAN" {{ old('kelurahan') == 'LABUHAN' ? 'selected' : '' }}>Labuhan</option>
            <option value="LEMBUNG PASESER" {{ old('kelurahan') == 'LEMBUNG PASESER' ? 'selected' : '' }}>Lembung Paseser</option>
            <option value="MANERON" {{ old('kelurahan') == 'MANERON' ? 'selected' : '' }}>Maneron</option>
            <option value="PRANCAK" {{ old('kelurahan') == 'PRANCAK' ? 'selected' : '' }}>Prancak</option>
            <option value="SAPLASAH" {{ old('kelurahan') == 'SAPLASAH' ? 'selected' : '' }}>Saplasah</option>
            <option value="SEPULU" {{ old('kelurahan') == 'SEPULU' ? 'selected' : '' }}>Sepulu</option>
            <option value="TANAGURA BARAT" {{ old('kelurahan') == 'TANAGURA BARAT' ? 'selected' : '' }}>Tanagura Barat</option>
            <option value="TANAGURA TIMUR" {{ old('kelurahan') == 'TANAGURA TIMUR' ? 'selected' : '' }}>Tanagura Timur</option>
        `;
    } else if(kecamatan == 'SOCAH') {
        kelurahanSelect.innerHTML += `
            <option value="BILAPORAH" {{ old('kelurahan') == 'BILAPORAH' ? 'selected' : '' }}>Bilaporah</option>
            <option value="BULUH" {{ old('kelurahan') == 'BULUH' ? 'selected' : '' }}>Buluh</option>
            <option value="DAKIRING" {{ old('kelurahan') == 'DAKIRING' ? 'selected' : '' }}>Dakiring</option>
            <option value="JADDIH" {{ old('kelurahan') == 'JADDIH' ? 'selected' : '' }}>Jaddih</option>
            <option value="JUNGANYAR" {{ old('kelurahan') == 'JUNGANYAR' ? 'selected' : '' }}>Junganyar</option>
            <option value="KELEYAN" {{ old('kelurahan') == 'KELEYAN' ? 'selected' : '' }}>Keleyan</option>
            <option value="PARSEH" {{ old('kelurahan') == 'PARSEH' ? 'selected' : '' }}>Parseh</option>
            <option value="PERNAJUH" {{ old('kelurahan') == 'PERNAJUH' ? 'selected' : '' }}>Pernajuh</option>
            <option value="PETAONAN" {{ old('kelurahan') == 'PETAONAN' ? 'selected' : '' }}>Petaonan</option>
            <option value="SAGGRA AGUNG" {{ old('kelurahan') == 'SAGGRA AGUNG' ? 'selected' : '' }}>Saggra Agung</option>
            <option value="SOCAH" {{ old('kelurahan') == 'SOCAH' ? 'selected' : '' }}>Socah</option>
        `;
    } else if(kecamatan == 'TANAH MERAH') {
        kelurahanSelect.innerHTML += `
            <option value="BAIPAJUNG" {{ old('kelurahan') == 'BAIPAJUNG' ? 'selected' : '' }}>Baipajung</option>
            <option value="BASANAH" {{ old('kelurahan') == 'BASANAH' ? 'selected' : '' }}>Basanah</option>
            <option value="BATANGAN" {{ old('kelurahan') == 'BATANGAN' ? 'selected' : '' }}>Batangan</option>
            <option value="BUDDAN" {{ old('kelurahan') == 'BUDDAN' ? 'selected' : '' }}>Buddan</option>
            <option value="DLAMBAH DAJAH" {{ old('kelurahan') == 'DLAMBAH DAJAH' ? 'selected' : '' }}>Dlambah Dajah</option>
            <option value="DLAMBAH LAOK" {{ old('kelurahan') == 'DLAMBAH LAOK' ? 'selected' : '' }}>Dlambah Laok</option>
            <option value="DUMAJAH" {{ old('kelurahan') == 'DUMAJAH' ? 'selected' : '' }}>Dumajah</option>
            <option value="JANGKAR" {{ old('kelurahan') == 'JANGKAR' ? 'selected' : '' }}>Jangkar</option>
            <option value="KENDABAN" {{ old('kelurahan') == 'KENDABAN' ? 'selected' : '' }}>Kendaban</option>
            <option value="KRANGGAN BARAT" {{ old('kelurahan') == 'KRANGGAN BARAT' ? 'selected' : '' }}>Kranggan Barat</option>
            <option value="LANDAK" {{ old('kelurahan') == 'LANDAK' ? 'selected' : '' }}>Landak</option>
            <option value="MRECAH" {{ old('kelurahan') == 'MRECAH' ? 'selected' : '' }}>Mrecah</option>
            <option value="PACENTAN" {{ old('kelurahan') == 'PACENTAN' ? 'selected' : '' }}>Pacentan</option>
            <option value="PADURUNGAN" {{ old('kelurahan') == 'PADURUNGAN' ? 'selected' : '' }}>Padurungan</option>
            <option value="PANGELEYAN" {{ old('kelurahan') == 'PANGELEYAN' ? 'selected' : '' }}>Pangeleyan</option>
            <option value="PATEMON" {{ old('kelurahan') == 'PATEMON' ? 'selected' : '' }}>Patemon</option>
            <option value="PETRAH" {{ old('kelurahan') == 'PETRAH' ? 'selected' : '' }}>Petrah</option>
            <option value="PETTONG" {{ old('kelurahan') == 'PETTONG' ? 'selected' : '' }}>Pettong</option>
            <option value="POTER" {{ old('kelurahan') == 'POTER' ? 'selected' : '' }}>Poter</option>
            <option value="RONGDURIN" {{ old('kelurahan') == 'RONGDURIN' ? 'selected' : '' }}>Rongdurin</option>
            <option value="TANAH MERAH DAJAH" {{ old('kelurahan') == 'TANAH MERAH DAJAH' ? 'selected' : '' }}>Tanah Merah Dajah</option>
            <option value="TANAH MERAH LAOK" {{ old('kelurahan') == 'TANAH MERAH LAOK' ? 'selected' : '' }}>Tanah Merah Laok</option>
            <option value="TLOMAR" {{ old('kelurahan') == 'TLOMAR' ? 'selected' : '' }}>Tlomar</option>
        `;
    } else if(kecamatan == 'TANJUNG BUMI') {
        kelurahanSelect.innerHTML += `
            <option value="AENG TABAR" {{ old('kelurahan') == 'AENG TABAR' ? 'selected' : '' }}>Aeng Tabar</option>
            <option value="BANDANG DAJAH" {{ old('kelurahan') == 'BANDANG DAJAH' ? 'selected' : '' }}>Bandang Dajah</option>
            <option value="BANYUSANGKA" {{ old('kelurahan') == 'BANYUSANGKA' ? 'selected' : '' }}>Banyusangka</option>
            <option value="BUMI ANYAR" {{ old('kelurahan') == 'BUMI ANYAR' ? 'selected' : '' }}>Bumi Anyar</option>
            <option value="BUNGKENG" {{ old('kelurahan') == 'BUNGKENG' ? 'selected' : '' }}>Bungkeng</option>
            <option value="LARANGAN TIMUR" {{ old('kelurahan') == 'LARANGAN TIMUR' ? 'selected' : '' }}>Larangan Timur</option>
            <option value="MACAJAH" {{ old('kelurahan') == 'MACAJAH' ? 'selected' : '' }}>Macajah</option>
            <option value="PASESEH" {{ old('kelurahan') == 'PASESEH' ? 'selected' : '' }}>Paseseh</option>
            <option value="PLANGGIRAN" {{ old('kelurahan') == 'PLANGGIRAN' ? 'selected' : '' }}>Planggiran</option>
            <option value="TAGUNGGUH" {{ old('kelurahan') == 'TAGUNGGUH' ? 'selected' : '' }}>Tagungguh</option>
            <option value="TAMBAK POCOK" {{ old('kelurahan') == 'TAMBAK POCOK' ? 'selected' : '' }}>Tambak Pocok</option>
            <option value="TANJUNG BUMI" {{ old('kelurahan') == 'TANJUNG BUMI' ? 'selected' : '' }}>Tanjung Bumi</option>
            <option value="TELAGA BIRU" {{ old('kelurahan') == 'TELAGA BIRU' ? 'selected' : '' }}>Telaga Biru</option>
            <option value="TLANGOH" {{ old('kelurahan') == 'TLANGOH' ? 'selected' : '' }}>Tlangoh</option>
        `;
    } else if(kecamatan == 'TRAGAH') {
        kelurahanSelect.innerHTML += `
            <option value="ALANG-ALANG" {{ old('kelurahan') == 'ALANG-ALANG' ? 'selected' : '' }}>Alang-Alang</option>
            <option value="BAJEMAN" {{ old('kelurahan') == 'BAJEMAN' ? 'selected' : '' }}>Bajeman</option>
            <option value="BANCANG" {{ old('kelurahan') == 'BANCANG' ? 'selected' : '' }}>Bancang</option>
            <option value="BANYUBESEH" {{ old('kelurahan') == 'BANYUBESEH' ? 'selected' : '' }}>Banyubeseh</option>
            <option value="DUKOTAMBIN" {{ old('kelurahan') == 'DUKOTAMBIN' ? 'selected' : '' }}>Dukotambin</option>
            <option value="JA'AH" {{ old('kelurahan') == 'JA\'AH' ? 'selected' : '' }}>Ja'ah</option>
            <option value="JADDUNG" {{ old('kelurahan') == 'JADDUNG' ? 'selected' : '' }}>Jaddung</option>
            <option value="KARANG LEMAN" {{ old('kelurahan') == 'KARANG LEMAN' ? 'selected' : '' }}>Karang Leman</option>
            <option value="KEMONING" {{ old('kelurahan') == 'KEMONING' ? 'selected' : '' }}>Kemoning</option>
            <option value="KETELENG" {{ old('kelurahan') == 'KETELENG' ? 'selected' : '' }}>Keteleng</option>
            <option value="MASARAN" {{ old('kelurahan') == 'MASARAN' ? 'selected' : '' }}>Masaran</option>
            <option value="PACANGAN" {{ old('kelurahan') == 'PACANGAN' ? 'selected' : '' }}>Pacangan</option>
            <option value="PAMORAH" {{ old('kelurahan') == 'PAMORAH' ? 'selected' : '' }}>Pamorah</option>
            <option value="POCONG" {{ old('kelurahan') == 'POCONG' ? 'selected' : '' }}>Pocong</option>
            <option value="SOKET DAJAH" {{ old('kelurahan') == 'SOKET DAJAH' ? 'selected' : '' }}>Soket Dajah</option>
            <option value="SOKET LAOK" {{ old('kelurahan') == 'SOKET LAOK' ? 'selected' : '' }}>Soket Laok</option>
            <option value="TAMBIN" {{ old('kelurahan') == 'TAMBIN' ? 'selected' : '' }}>Tambin</option>
            <option value="TRAGAH" {{ old('kelurahan') == 'TRAGAH' ? 'selected' : '' }}>Tragah</option>

        `;
    }

}