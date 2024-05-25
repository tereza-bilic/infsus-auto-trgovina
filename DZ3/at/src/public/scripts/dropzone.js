const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('slikaUrl');
const preview = document.getElementById('preview');

dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  dropZone.classList.remove('dragover');
  const files = event.dataTransfer.files;
  handleFiles(files);
});

fileInput.addEventListener('change', (event) => {
  const files = event.target.files;
  handleFiles(files);
});

function handleFiles(files) {
  for (const file of files) {
    console.log('File:', file);
    // You can process the file here

    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.classList.remove('hidden');
    };

    reader.readAsDataURL(file);
  }
}
