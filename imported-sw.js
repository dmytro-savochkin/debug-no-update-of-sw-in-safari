self.addEventListener('fetch', (event) => {
  console.log(`got fetch ${event}`);
  return;
});
