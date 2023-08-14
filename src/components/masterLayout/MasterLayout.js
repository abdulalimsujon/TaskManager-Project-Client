import React, { Fragment, useRef } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from "../../assets/images/logo.svg"
import {BsHourglass, BsListNested} from "react-icons/bs";
//  import {MdOutlineCancelPresentation, RiDashboardLine} from "react-icons/all";

import {AiOutlineCheckCircle, AiOutlineEdit, AiOutlineLogout, AiOutlineMenuUnfold, AiOutlineUser} from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { getUserDetails, removeSession } from '../../helper/SessionHelper';



const MasterLayout = (props) => {

    let contentRef,sideNavRef=useRef();

    const image =  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAo5JREFUOE991EvoVlUUBfDf33yk+aoUfJSCSWiIFkphJD0Qk8gsGmgQKb4w8ZGog6yECAt1UJmTFDInDRIHiSRIJD5SwhI0DDHKgVBgkopgaFqxZH9y+fvhhcv3nbvPWXvvtdbZHW59uuAePIRH8DDG4BqON96fcAnXmxAdjUX+34n7sRLPYG+9h9ANT2BSJTmAz/ALLrdwWoD57YuXMQ/b8GkjWVf816imF2ZjET7CdlzM/hZgT7yC5ZiO3yqWiu/FkAI7U23+XfHB2FL7V+BqAMPZSHyOVxtgd+N5ZGN4Oo9/8AV24a/qYBC+wjvYE8CBWIsfq81864/5eBSrcBp34AHMxVC8XtV2L26zfi2Hn6yyH6yMPTAZc4rTzj5IsndxDu9VMPwvTncBXNZQNvF+WI3wtamNraL2Y7XnuYrfleowLIBb8SV2V3AANuNj7GsDmDPD8S1GVDx0jMMnCf6Aafijgu1aauKGkinF5YuNwH04HMBjmNoAzIFnS7W0FHVzS/Kk3Rh/Hb4rD7Yw8/1QAHdiI75pZOuNN/AU1uAkYu5RmFFJ3m7sj/Ui6u4AflieaimWYEgOlwFNlfsRe0ysq/gWYu68qT4X4KX4OICzio+0GQMPw8wiOetQ8nNVmCExuhJ+X+DRILZJYacCmMmyHgfxe9noV2wo67QR+gZAWg4lOXsW70esAIab8XVbUsEHZZl2QM1vGRDp7s2yXir+ujUc+tTIyvxbWpVevQ1izkXxWCUXI+MrwDenTf5H2UybiJC7nXkX0Cv4t8AjWMRJdY9jAU60wDoDZh11F2IJduBoiXKhkudaxh6h5oW6mplSN5/mxG59TAUT8HRxOxYxe6r8s6bSkbLSqc60/A9RX4qkRAR+rgAAAABJRU5ErkJggg=="
    

    const MenuBarClickHandler = () => {
        let sideNav = sideNavRef;
        let content = contentRef;

        

        if (sideNav.classList.contains("side-nav-open")) {
            sideNav.classList.add("side-nav-close");
            sideNav.classList.remove("side-nav-open");
            content.classList.add("content-expand");
            content.classList.remove("content");
        } else {
            sideNav.classList.remove("side-nav-close");
            sideNav.classList.add("side-nav-open");
            content.classList.remove("content-expand");
            content.classList.add("content");
        }
    };

    const logout =()=>{
        removeSession();
    }

    console.log()
    return (
     <Fragment>

<Navbar  className="fixed-top px-0 shadow-sm ">
                <Container fluid={true}>
                    <Navbar.Brand >
                        <a className="icon-nav m-0 h5" onClick={MenuBarClickHandler}><AiOutlineMenuUnfold/></a>
                        <img className="nav-logo mx-2" src="" alt="logo"/>
                    </Navbar.Brand>


                    
                    <div className="float-right h-auto d-flex">
                        <div className="user-dropdown">
                            <img className="icon-nav-img icon-nav" src={image} alt="no"/>
                            <div className="user-dropdown-content ">
                                <div className="mt-4 text-center">
                                    <img className="icon-nav-img" src={image}alt="no"/>
                                  
                                    <hr className="user-dropdown-divider  p-0"/>
                                </div>
                                <NavLink to="/profile" className="side-bar-item">
                                    <AiOutlineUser className="side-bar-item-icon" />
                                    <span className="side-bar-item-caption">Profile</span>
                                </NavLink>
                                <a className="side-bar-item">
                                    <AiOutlineLogout className="side-bar-item-icon" />
                                    <span onClick = {logout} className="side-bar-item-caption">Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>

              
                </Container>
            </Navbar>



 <div ref={(div) =>{sideNavRef=div}} className="side-nav-open">

<NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" }  to="/"  end>
    {/* <RiDashboardLine className="side-bar-item-icon" /> */}
    <span className="side-bar-item-caption">Dashboard</span>
</NavLink>

<NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/create" >
    <AiOutlineEdit className="side-bar-item-icon" />
    <span className="side-bar-item-caption">Create New</span>
</NavLink>

<NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/new" >
    <BsListNested className="side-bar-item-icon" />
    <span className="side-bar-item-caption">New Task</span>
</NavLink>

<NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/progress" >
    <BsHourglass className="side-bar-item-icon" />
    <span className="side-bar-item-caption">In Progress</span>
</NavLink>

<NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" }  to="/complete" >
    <AiOutlineCheckCircle className="side-bar-item-icon" />
    <span className="side-bar-item-caption">Completed</span>
</NavLink>

<NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" }  to="/cancel" >
    {/* <MdOutlineCancelPresentation className="side-bar-item-icon" /> */}
    <span className="side-bar-item-caption">Canceled</span>
</NavLink>

</div>

<div ref={(div) => contentRef = div} className="content">

    {props.children}

</div>

     </Fragment>
    );
};

export default MasterLayout;