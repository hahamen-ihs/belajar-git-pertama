let kelas3 = [
    {nis:1,nama:'Ahmad'},
    {nis:2,nama:'Dhani'},
];

function tambahSiswa(siswa)

{
    return new Promise((resolve, reject) => {
        try{
            resolve()
            kelas3.push(siswa);
            }catch(err){
                console.log(err)
            }

    })
}

function getKelas()
{
    console.log('kelas3 dalam getClass (baris 36):', kelas3);
}

async function init (){
    await tambahSiswa ({nis:3,nama:'Rinjani'})
    await getKelas()
}

init()

//paling banyak digunakan adalah aysnc-await