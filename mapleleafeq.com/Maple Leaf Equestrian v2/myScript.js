var isNavOpen = false;

function toggleNav() {
  var nav = document.getElementsByClassName('small')[0];
  var txtDiv = document.getElementById('links');
  var clsBtn = document.getElementById('close');

    if (isNavOpen) {
      nav.style.width = '0';
      txtDiv.style.display = 'none';
      clsBtn.style.display = 'none';
    } else {
      nav.style.width = '100vw';
      txtDiv.style.display = 'flex';
      clsBtn.style.display = 'block';
    }

    isNavOpen = !isNavOpen;

}
