import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`http://localhost:${port}`);
  console.log(`Escutando na porta ${port}`);
});
