"use client";
import { useContext, useState } from "react";
import ZenkoLogo from "@/components/svg/zenko-logo";
import Marketplace from "@/components/Marketplace";


export default function Home() {

  const [selectedNav, setSelectedNav] = useState("Marketplace");
  
  // add a new state variable for the sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderSelectedComponent = () => {
    switch (selectedNav) {
      case "Dashboard":
        return ;
      case "My Wallet":
        return;
      case "Marketplace":
        return <Marketplace />;
      case "Zenkoin documentation":
        return;
      case "AI Solutions":
        return;
      case "Community":
        return;
      case "Academy":
        return;
      default:
        return <Marketplace />;
    }
  };

  // function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='{styles.compteWrapper}'>
      <div className="flex">

        {/* TODO : ATTENTION USER INFO A CHANGER (FCK NATH AHAHAH) */}
        
          <>
            <div className={`flex flex-col overflow-y-auto border-r border-gray-700 transition-all duration-300 ${isSidebarOpen ? 'w-96' : 'w-16'}`}>
              <div className="relative">

                <button className={`jesuis absolute flex items-center top-28 text-2xl opacity-80 transition-all duration-300 ${isSidebarOpen ? 'right-8' : 'left-4'} `} onClick={toggleSidebar}>{isSidebarOpen ? <span className="icon-[carbon--side-panel-close]"></span> : <span className="icon-[carbon--side-panel-open]"></span>}</button>
                <div className="py-10 px-4">
                  <ZenkoLogo />
                </div>

                <div className="flex flex-col justify-between mt-6 ">
                  <aside>
                    <ul>
                      {
                        [
                        {text: "Dashboard", icon: "icon-[carbon--dashboard]"}, 
                        {text: "My Wallet", icon: "icon-[carbon--wallet]"},
                        {text: "Marketplace", icon: "icon-[carbon--shopping-catalog]"},
                        {text: "AI Solutions", icon: "icon-[carbon--machine-learning-model]"},
                        {text: "Zenkoin", icon: "icon-[carbon--currency]"},
                        {text: "Community", icon: "icon-[carbon--share-knowledge]"},
                        {text: "Academy", icon: "icon-[carbon--notebook-reference]"},
                      ].map((navOption) => (
                        <li
                          key={navOption.text}
                          className={
                            selectedNav != navOption.text ? "styles.active" : "bg-sidebarBtn-1"
                          }
                          onClick={() => setSelectedNav(navOption.text)}
                        >
                            <a className="flex items-center px-4 py-4 pt-15 disabled text-2xl text-gray-200 rounded-md border-4 border-transparent hover:border-btnBorder hover:bg-sidebarBtn-0 focus:bg-sidebarBtn-1 active:bg-sidebarBtn-1">
                   
                            <span className={navOption.icon}></span>

                            {isSidebarOpen && (
                              <span className="mx-4 text-base">
                                {navOption.text}
                              </span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </>
        

        <div className="w-full h-full overflow-y-auto">
          <header className="relative w-full h-24">
            <div className="flex flex-row">
              <div className="justify-start">
                <p className="text-2xl font-medium pt-8 ml-20">{selectedNav}</p>
              </div>


              <div className="absolute p-6 right-0 top-0">
                <div className="flex flex-row">
                  <div className="m-5 border border-slate-700 rounded-lg">
                    <span className="icon-[carbon--dashboard]"></span>
                  </div>
                  <div className="m-5 border border-slate-700 rounded-lg">
                    <span className="icon-[carbon--dashboard]"></span>
                  </div>
                  <div className="m-5 border border-slate-700 rounded-lg">
                    <span className="icon-[carbon--dashboard]"></span>
                  </div>
                  <div className="m-5 border border-slate-700 rounded-lg">
                    <span className="icon-[carbon--dashboard]"></span>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="m-5 mt-5">{renderSelectedComponent()}</div>
        </div>
      </div>
    </div>
  );
}
