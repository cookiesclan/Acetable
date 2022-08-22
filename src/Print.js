import React, {forwardRef, useRef} from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import JsonDisplayData from "./AceTable";

const ComponentToPrint = forwardRef((props, ref)=> {
    return <div ref={ref}><JsonDisplayData /></div>
})

export default function PrintPDF() {
    const ref = useRef();
    
    return (
      <div className="flex flex-col items-center">
        <ReactToPrint content={() => ref.current}>  
            <PrintContextConsumer>
                {({ handlePrint }) => (
                    <button 
                        className="bg-green-600 text-white py-2 px-6 my-10 rounded hover:bg-green-700"
                        onClick={handlePrint}>Output to file</button>
                )}
            </PrintContextConsumer>
          <ComponentToPrint ref={ref} />
        </ReactToPrint>
      </div>
    );
}
