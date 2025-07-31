import './App.css'
import { Button } from './components/buton'
import { Plusicon } from './icons/plus';
import { Shareicon } from './icons/share';

function App(){

return <>
   <Button variant="secondary" text="Share" size='md' startIcon={<Shareicon size='md'/>}/>
   <Button variant="primary" text="Add Content" size='md'  startIcon={<Plusicon size='md'/>}/>
   
   </>
}

export default App;