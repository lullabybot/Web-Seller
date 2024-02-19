document.addEventListener('DOMContentLoaded', function () {
    // Simulated data (randomly generated)
    const orders = [
      { tanggal: '2024-02-12', daftar_barang: 'Buku, Pensil, Pulpen', carabayar: 'Tunai' },
      { tanggal: '2024-02-13', daftar_barang: 'Buku, Penghapus', carabayar: 'Kartu Kredit' },
      { tanggal: '2024-02-14', daftar_barang: 'Pensil, Penggaris, Spidol', carabayar: 'Transfer Bank' },
      { tanggal: '2024-02-15', daftar_barang: 'Buku, Pensil, Spidol', carabayar: 'Tunai' },
      { tanggal: '2024-02-16', daftar_barang: 'Buku, Pensil, Pulpen', carabayar: 'Tunai' },
      { tanggal: '2024-02-17', daftar_barang: 'Buku, Penghapus', carabayar: 'Transfer Bank' },
      { tanggal: '2024-02-18', daftar_barang: 'Buku, Pensil, Pulpen', carabayar: 'Tunai' },
      { tanggal: '2024-02-19', daftar_barang: 'Pensil, Penggaris, Spidol', carabayar: 'Kartu Kredit' }
    ];
  
    // Filter orders for the past week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const filteredOrders = orders.filter(order => new Date(order.tanggal) >= oneWeekAgo);
  
    // Count occurrences of each item in the order list
    const itemCounts = {};
    filteredOrders.forEach(order => {
      const items = order.daftar_barang.split(', ');
      items.forEach(item => {
        itemCounts[item] = (itemCounts[item] || 0) + 1;
      });
    });
  
    // Sort items by frequency
    const sortedItems = Object.keys(itemCounts).sort((a, b) => itemCounts[b] - itemCounts[a]);
  
    // Prepare data for chart
    const labels = sortedItems.slice(0, 5); // Display top 5 items
    const data = labels.map(label => itemCounts[label]);
  
    // Render chart using Chart.js
    const ctx = document.getElementById('chartCanvas').getContext('2d'); // Target the canvas element
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Jumlah Terjual',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });

  
// Mengambil tombol-tombol
// Mengambil tombol-tombol
const homeBtn = document.getElementById('homeBtn');
const profileBtn = document.getElementById('profileBtn');
const productBtn = document.getElementById('productBtn');
const orderBtn = document.getElementById('orderBtn');

// Menambahkan event listener untuk mengatur ukuran tombol saat diklik
homeBtn.addEventListener('click', handleButtonClick);
profileBtn.addEventListener('click', handleButtonClick);
productBtn.addEventListener('click', handleButtonClick);
orderBtn.addEventListener('click', handleButtonClick);

// Menangani perubahan ukuran saat tombol diklik
function handleButtonClick(event) {
    // Menghapus kelas aktif dari semua tombol
    const allLinks = document.querySelectorAll('nav ul li a');
    allLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Menambahkan kelas aktif pada tombol yang diklik
    event.target.classList.add('active');

    // Memeriksa apakah tombol yang diklik adalah tombol "Home" dan pengguna masih berada di halaman "Home"
    if (event.target.id === 'homeBtn' && window.location.href.includes('home')) {
        event.target.classList.add('defaultLarge'); // Menambahkan kelas defaultLarge untuk menjaga ukuran besar
    } else {
        homeBtn.classList.remove('defaultLarge'); // Menghapus kelas defaultLarge jika tidak di halaman "Home"
    }
}
