import { useEffect, useState } from 'react';
import '../App.css'
import { Button } from '../components/buton'
import { Card } from '../components/card';
import { CreateContentModal } from '../components/createcontentmodal';
import { Plusicon } from '../icons/plus';
import { Shareicon } from '../icons/share';
import { Sidebar } from '../components/sidebar';
import { useContents } from '../hooks/usecontent';

export function Dashboard() {
    const [modal, Setmodal] = useState(true);
    const {contents,refresh} = useContents();

    useEffect(()=>{
        refresh();
    },[modal]);

    return <div>
        <div>
            <Sidebar />
        </div>
        <div className="ml-68 min-h-screen bg-[#eeeeef]">
            <CreateContentModal open={modal} onClose={() => Setmodal(false)} />

            <div className='flex justify-end gap-4 p-2 '>
                <Button onClick={() => Setmodal(true)} variant="primary" text="Add Content" size='md' startIcon={<Plusicon size='md' />} />
                <Button variant="secondary" text="Share Brain" size='md' fullwidith={false} startIcon={<Shareicon size='md' />} />
            </div>
            <div className='flex  flex-wrap justify-center gap-3 '>
                {contents.map(item => <Card
                    key={item._id}
                    id={item._id}
                    type={item.type}
                    link={item.link}
                    title={item.title}
                />)}
                {/* <Card type='tweet' link="https://x.com/deepdownanlyz/status/1950955886966657343" title='First Tweet'/>
   <Card type='youtube' link="https://www.youtube.com/watch?v=w4rG5GY9IlA" title='First Youtube vedio'/>
   <Card type='tweet' link="https://x.com/ChessbaseIndia/status/1950925285001499093" title='First Tweet'/>
   <Card type='youtube' link="https://www.youtube.com/watch?v=w4rG5GY9IlA" title='First Youtube vedio'/> */}
            </div>
        </div>
    </div>
}


