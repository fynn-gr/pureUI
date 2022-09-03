/* @refresh reload */
import { Component, createSignal, Match, Switch } from 'solid-js';
import { render } from 'solid-js/web';

import TopBar from '../components/windowElements/TopBar';
import SideBar from '../components/windowElements/SideBar';
import PropertiesLayout from '../components/PropertiesLayout';
import SideBarTop from '../components/windowElements/SideBarTop';
import WinButtonsMac from '../components/windowElements/winButtonsMac';
import '../../../scss/index.scss';
import './App.scss';

import TopBarContent from '../components/TopBarContent';

const [platform, setPlatform] = createSignal("macos"); //win, macos, linux, dev
const icons = '../src-tauri/icons/';



const App:Component = () => {
  return (
    <div class="windowBody">

      <Switch>
        <Match when={platform() === "macos"}>
          <WinButtonsMac/>
        </Match>
        <Match when={platform() === "dev"}>
          <WinButtonsMac/>
        </Match>
      </Switch>

      <TopBar type="toolBar" content={TopBarContent} platform={platform()}/>
      <SideBar/>
      <PropertiesLayout/>
      <SideBarTop/>
      <div class="area-canvas">
        <div class="frame" style="border-color:#c33; width: 300px; height: 150px;"></div>
        <div class="frame" style="border-color:#3c3; width: 200px; height: 200px;"></div>
        <div class="frame" style="border-color:#33c; width: 350px; height: 250px;"></div>
      </div>
      <div class="statusBar">
        <p>FullHD 1920 x 1080</p>
        <div class="spacer"></div>
        <p>pureScreen 0.2.0</p>
      </div>
      <div class="windowRim"></div>
    </div>
  );
};


render(() => <App />, document.getElementById('root') as HTMLElement);
