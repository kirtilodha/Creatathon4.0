import React from "react";
import Button from 'react-bootstrap/Button';

function Delivery(props) {
  return (
    <div className="mt-16 mb-20">
      <h2 className="mb-10">Make a delivery</h2>
      <div className="grid grid-cols-2 mb-10">
        <div>
          <form className="text-2xl">
            <label>
              <span className="mr-5 font-extrabold">Bed No. :</span>
              <input type="text" id="first_name" className="w-84 h-8 px-2 font-semibold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" />

              {/* <input className="rounded-lg w-52 h-14" type="text" name="name" /> */}
            </label>
          </form>
        </div>
        <div>
            
          <form className="text-2xl">
            <label>
                
            <span className="mr-5 font-extrabold">Choose Medicine:</span>
              
              <select className="w-40 h-10 p-2 font-semibold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg">
                <option value="grapefruit">Paracetamol 650</option>
                <option value="lime">Disprine</option>
                <option value="coconut">Eye Drops</option>
                <option value="mango">Crocin</option>
              </select>
            </label>
          </form>
        </div>
      </div>

      <Button variant="primary" className="w-36 h-12">Submit</Button>
    </div>
  );
}

export default Delivery;
