import PrintPDF from './Print';

function App() {
  return (
    <div className="flex flex-col py-6">
      <h1 className='px-6 py-4 justify-center text-bold text-center text-4xl md:text-6xl font-extrabold mt-4 text-[#30c4bd]'>Hello Ace!!!</h1>
        <PrintPDF />
    </div>
  );
}
 
export default App;
