
import {
  Navbar,
  MainPage,
  Features,
  Problematica
} from '../../components/index';


export default function Home() {
  return (
    <div className="bg-slate-200">
      <Navbar/>
      <MainPage/>
      <Features/>
      <Problematica/>
      

    </div>
  );
}
