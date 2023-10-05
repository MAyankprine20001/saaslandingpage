import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";
import { AiFillStar, AiOutlineHeart , AiFillHeart} from 'react-icons/ai'
import { addTOwishList, removeFromWishList } from "../redux/Slices/wishListSlice";

const Product = ({ item, currencyValue }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state);


  const addToCart = () => {
    // console.log(item);
    dispatch(add(item));
    toast.success("item added to cart");
    // console.log(cart);
  }
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("item removed from cart")

  }
  const addItemwishList = () => {
    dispatch(addTOwishList(item));
    toast.success("added to wishlist");
    console.log(wishlist);
  }
  const removeItemWishList = () => {
    dispatch(removeFromWishList(item))
  }

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border">
      <div>
        <p className="text-gray-700 font-semibold text-lg truncate w-40 mt-1">
          {item.title}</p>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0, 10).join(" ") + ". . ."}</p>
      </div>

      <div className="flex justify-end items-center w-full gap-1">
        {
          wishlist.some((element) => element.id === item.id) ? (
            <div>
                <AiFillHeart 
                className="cursor-pointer"
                onClick={removeItemWishList}/>
            </div>
          ) : (
            <div onClick={addItemwishList}>
              <AiOutlineHeart className="cursor-pointer" />
            </div>
          )
        }

        <div className="flex justify-end items-center w-full gap-1">
          {
            new Array(Math.floor(Number((item.rating).split("/").at(0)))).fill(0).map((value, index) => (
              <AiFillStar className="text-yellow-400" key={index} onClick={() => { }} />
            ))
          }
          <p>{(item.rating).split("/").at(0)}</p>
        </div>
      </div>

      <div className="h-[180px] tooltip " data-tip={item.title}>
        <img src={item.img} alt="img" className="h-full w-full" />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">
            {
              currencyValue === "Dollar" ? (<span>${Math.round((item.price).split(" ").at(0))}</span>) : (<span>₹{Math.round((item.price).split(" ").at(0)) * 80}</span>)
            }
          </p>
        </div>
        <div>
          {
            cart.some((ele) => ele.id == item.id) ?
              <button
                className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
                onClick={removeFromCart}
              >Remove Item</button> :
              <button
                className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
                onClick={addToCart}
              >Add to cart</button>
          }
        </div>
      </div>

    </div >
  )
};

export default Product;
