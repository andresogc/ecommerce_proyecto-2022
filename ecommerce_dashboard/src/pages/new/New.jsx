import {useState} from "react";
import "./new.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';



const New = ({inputs,title}) => {

  const [file, setFile] = useState();

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file): "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className="icon"/></label>
                <input type="file" id="file" onChange={e=>{setFile(e.target.files[0])}} style={{display:'none'}}/>
              </div>
             
              {
                inputs.map(input=>(
                  <div className="formInput" key={input.id}>
                    <label htmlFor="">{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ))
              }
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default New