// Parallax Effect
var image = document.getElementsByClassName('parallax');
new simpleParallax(image);

// Button Function
function myFunction() {
    const swals = Swal.mixin({
        allowOutsideClick: false,
        cancelButtonColor: "#FF0040",
      })
      const swalsy = Swal.mixin({
        confirmButtonText: "Iya",
        allowOutsideClick: false,
      })
      const swalst = Swal.mixin({
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      })

      async function mulaitanya() {
        var { isConfirmed: tanyawal } = await swals.fire({
          title: `Hii, I have some messages for you!`,
          imageUrl: "https://media.tenor.com/hYq-uxUwOG4AAAAj/mochi-mochimochi.gif",
          imageWidth: 150,
          imageHeight: 120,
          confirmButtonText: "Okay",
          allowOutsideClick: true,
          showCancelButton: false,
        })
        if (tanyawal) {
          kuis()
        }
      }

      async function kuis() {
        await swalst.fire({
          title: "Happy Graduation Day Babe!!!",
          imageUrl: "https://i.postimg.cc/02wF21b1/peach-goma.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Harus semangat yaa pas memasuki dunia kerja nantii, aku tau kamu bisa kokk",
          imageUrl: "https://i.postimg.cc/g06FWScx/tepukbadan.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Aku harap kamu suka cincinnya hehe, maaf yaa kalo harganya ga seberapa :(",
          imageUrl: "https://i.postimg.cc/vZWmnK2p/gigit.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Ini sebagai janji aku ke kamu, ke diri sendiri juga kalo aku serius sama kamu dan...",
          imageUrl: "https://i.postimg.cc/SsmkcNY9/bear-cute-1.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "That one day I'll marry you",
          imageUrl: "https://media.tenor.com/0Uk-f2AGMy4AAAAi/peach-and-goma-kiss.gif",
          imageWidth: 130,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Jangan tinggalin aku yaa, please stay with me",
          imageUrl: "https://media.tenor.com/BEjjRqMzAesAAAAi/goma-and-peachcat-hug.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Semoga hubungan kita bisa langgeng terus, kuat dalam menghadapi masalah-masalah yang muncul",
          imageUrl: "https://media.tenor.com/0Uk-f2AGMy4AAAAi/peach-and-goma-kiss.gif",
          imageWidth: 130,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Kita harus sama-sama kuat LDR nantii, harus saling yakin satu sama lain",
          imageUrl: "https://media.tenor.com/0Uk-f2AGMy4AAAAi/peach-and-goma-kiss.gif",
          imageWidth: 130,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Aku mau kamu merasa disayang lagi sama seseorang selain alm Kakek, Nenek kamu. Aku mau jadi orang penting di hidup kamu",
          imageUrl: "https://media.tenor.com/0Uk-f2AGMy4AAAAi/peach-and-goma-kiss.gif",
          imageWidth: 130,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "You deserve to be happy babe, and i want to be part of it",
          imageUrl: "https://media.tenor.com/0Uk-f2AGMy4AAAAi/peach-and-goma-kiss.gif",
          imageWidth: 130,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Thank you for everything babe &#128151;",
          imageUrl: "https://media.tenor.com/0Uk-f2AGMy4AAAAi/peach-and-goma-kiss.gif",
          imageWidth: 130,
          imageHeight: 120,
        })
      }
      mulaitanya()
}

function btnPlay() {
  const audio = new Audio(
    "https://dl.sndup.net/tvzq/%E3%83%A8%E3%83%AB%E3%82%B7%E3%82%AB%20-%20%E5%B7%A6%E5%8F%B3%E7%9B%B2.mp3"
  )
  audio.play();

  const flower = document.getElementById("peony")
  flower.classList.toggle("active");

  const text = document.getElementById("pgText")
  text.classList.toggle("active");
}
