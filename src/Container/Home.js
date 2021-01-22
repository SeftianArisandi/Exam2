import React from 'react';
import Ulangan2 from '../Component/Ulangan2';

function Home() {
    return (
        <Ulangan2 kirim='[{
            "type": "radio",
            "soal": "Siapakah penemu baling-baling bambu",
            "a": "Doraemon",
            "b": "hanif",
            "c": "nobita",
            "d": "naruto",
            "jawab": "a"
        }, {
            "type": "checkbox",
            "soal": "pilihlah 3 yang benar mengenai aqil",
            "option": ["Trainer Juara Coding", "Manusia", "Anggota Avenger"],
            "jawab": ["Manusia", "Anggota Avenger"]
        }, {
            "type": "essay",
            "soal": "Ceritakan pengalaman anda ketika sedang tidur"
        }]' />
    )
}

export default Home;