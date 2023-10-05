import { MdDelete } from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex , setQuantityArr ,quantityArr }) => {

  const dispatch = useDispatch();
  console.log(quantityArr);
  const removeFromCart = () => {
    dispatch(remove(item.id));
    // console.log(quantityArr)
    quantityArr.splice(itemIndex , 1);
    // console.log(quantityArr);
    setQuantityArr([...quantityArr]);
    toast.error("removed successfully")
  }

  const IncQuantity = ()=>{
    quantityArr[itemIndex]++;
    setQuantityArr([...quantityArr]);
  }
  const DecQuantity = ()=>{
    if(quantityArr[itemIndex] >= 2){
      quantityArr[itemIndex]--;
      setQuantityArr([...quantityArr]);
    }
  }
  
  return (
    <div className="flex gap-[4em] mt-2 border-2 p-5 h-[30%] rounded-lg hover:scale-110 transition duration-300 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] mb-10 ">
      <div className="w-4/12">
        <img src={item.img} alt="item" className="h-full w-full" />
      </div>
      <div className="w-6/12">
        <h1>{item.title}</h1>
        <h2
          className="text-gray-500 font-semibold text-sm mt-4"
        >{item.description.split(" ").slice(0, 15).join(" ") + ". . ."}</h2>
        <div className="flex justify-between mt-12">
          <p className="text-green-600 font-semibold">${Math.round((item.price).split(" ").at(0))}</p>

          <div className="flex bg-slate-200  py-2 rounded-3xl text-xl">
            <button onClick={DecQuantity} className="px-5 border-r-2 border-black">-</button>
            <p className="px-3">{quantityArr[itemIndex]}</p>
            <button onClick={IncQuantity} className="px-5  border-l-2 border-black">+</button>
          </div>

          <div
            onClick={removeFromCart}
            className="bg-red-400 h-8 w-8 flex justify-center items-center rounded-full cursor-pointer">
            <div><MdDelete /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
