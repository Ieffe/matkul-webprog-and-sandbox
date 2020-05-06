<?php
    $name = $_POST["name"];
    $nim = $_POST["nim"];
    $ttl = $_POST["ttl"];
    $placebirth = $_POST["placebirth"];
    $age = $_POST["age"];
    $hobby = $_POST["hobby"];
    $ket = $_POST["ket"];
    $category = "";

    if ($age <= 10 ) {
        $category = "Anak-anak";
    }
    elseif ($age >= 11 && $age <= 20) {
        $category = "remaja";
    }
    elseif ($age >= 21 && $age <= 25 ) {
        $category = "dewasa";
    }
    else{
        $category = "tua";
    }
    
    echo "Nama: " . $name . "<br>";
    echo "NIM: " . $nim . "<br>";
    echo "Tanggal lahir: " . $ttl . "<br>";
    echo "Umur: " . $age . "<br>";
    echo "Kategori: " . $category . "<br>";
    echo "Hobi: " . $hobby . "<br>";
    echo "Keterangan: " . $ket . "<br>";
    
?>