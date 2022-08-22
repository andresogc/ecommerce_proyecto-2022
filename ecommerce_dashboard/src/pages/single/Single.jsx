import "./single.scss";
import Sidebar from './../../components/sidebar/Sidebar';
import Navbar from './../../components/navbar/Navbar';
import Chart from './../../components/chart/Chart';
import List from './../../components/table/Table';

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
        <div className="singleContainer">
          <Navbar/>
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img src="https://i.pinimg.com/736x/c5/21/40/c52140e4dc3be8804feae5414fc2605f.jpg" alt="" className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">janedoe@mail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">j+1 298 46 4453</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">San quintin 5</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">USA</span>
                  </div>

                </div>
              </div>
            </div>
            <div className="right">
              <Chart aspect={3/1} title={"User spending (Last 6 Months)"}/>
            </div>
          </div>
          <div className="bottom">
            <div className="title">Last Transactions</div>
            <List/>
          </div>
        </div>
    </div>

  )
}

export default Single