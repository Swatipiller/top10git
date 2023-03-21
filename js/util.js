function copyText(id) {
  const text = document.getElementById(id);
  const toastEl = document.getElementById("copyToast");

  navigator.clipboard.writeText(text.textContent);

  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}
