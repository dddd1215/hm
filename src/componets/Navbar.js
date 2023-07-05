import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Navbar = ({authenticate,setAuthenicate}) => {
    const Navigate=useNavigate()
    const menuList=[
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Hone",
        "Sale",
        "지속가능성성",
    ];
    const gotoLogin=()=>{
        Navigate('/login');
    }
    const gotoMain=()=>{
        Navigate('/');
    }
    const search=(e)=>{
        //console.log(event.key)
        if(e.key == "Enter"){
            let keyword = e.target.value;
            //console.log(keyword)
            Navigate(`/?q=${keyword}`)
        }
    }
  return (
    <div className='container mt-5'>
        <div className='d-flex justify-content-end align-items-center'onClick={gotoLogin}>
            <i className="fas fa-user"></i>
            {authenticate?(
                <div onClick={()=>{setAuthenicate(false)}}>
                    <span>로그아웃</span>
                </div>
            ):(<div onClick={()=>{setAuthenicate(false)}}>
                <span>로그인</span>
        </div>)}
            {/* <button className='ms-2'>로그인</button> */}
            </div>
            <div className='text-center'>
                <img
                onClick={gotoMain}
                 width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/220px-H%26M-Logo.svg.png'/>
            </div>
            <div className='d-flex mt-3'>
                <ul className='d-flex flex-grow-1 justify-content-center align-items-center'>
                    {menuList.map((item)=>{
                        return <li key={item} className='px-2'>{item}</li>;
                    })}
                </ul>
                <div>
                    <i className="fas fa-search"></i>
                    <input type='text' onKeyDown={(event)=>{
                        search(event)
                    }}/>
                </div>
            </div>
    </div>
    
  )
}

export default Navbar