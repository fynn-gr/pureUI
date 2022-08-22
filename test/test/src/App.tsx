/* @refresh reload */
import { Component, createSignal } from 'solid-js';
import { render } from 'solid-js/web';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import Properties from '../components/Properties';
import SideBarTop from '../components/SideBarTop';
import '../../../scss/index.scss';
import './App.scss';

const icons = '../../../assets/icons'
const toolBarButtons = {

}

const App:Component = () => {
  return (
    <div class="windowBody">
      <TopBar type="toolBar"/>
      <SideBar/>
      <Properties/>
      <SideBarTop/>
      <div class="area-text"></div>
    </div>
  );
};

render(() => <App />, document.getElementById('root') as HTMLElement);
