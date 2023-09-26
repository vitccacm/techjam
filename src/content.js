import React from "react";
import Header from "./header";
import Modules from "./Modules";
import Tables from "./Table";
import vd1cp from './vd1cp.mp4'
import vd1eh from './vd1eh.mp4'

const Content=()=>{
    const links1 = [
        '',
        'https://drive.google.com/file/d/1Q1eUqCZ0N7dnCANR-zfE4iOgEo9GbV0R/view?usp=sharing',
        'https://drive.google.com/file/d/1-aobW-WEl34s1a_9pMwQyQsvrTnBCdxO/view?usp=drive_link',
        'https://docs.google.com/presentation/d/1sYg-0UrGKijiP_HXyh3I_LE44Vl4VrPD/edit?usp=drive_link&ouid=109807022555841161079&rtpof=true&sd=true',
        ''
    ]
    const data1 = [{ name: 'Divide and Conquer', video: 'Video 1', code: 'Codeuses', assignment:'Click to Download PPT' ,quiz:'Quiz 1'},];

    const links2 = [
        '',
        'https://drive.google.com/file/d/10g3Xxf-0c_7lq3CaAEbG30qfoRTSKKcg/view?usp=drive_link',
        '',
        '',
        ''
    ]
    const data2 = [{ name: 'Introduction To Linux', video: 'Video 1', code: '-', assignment:'-' ,quiz:'-'},];
    
    const links3 = [
        '',
        'https://drive.google.com/file/d/10g3Xxf-0c_7lq3CaAEbG30qfoRTSKKcg/view?usp=drive_link',
        '',
        'https://docs.google.com/document/d/1qMXlM4Zv-yLnsF3oXJNJBm7gmXBnzk_v/edit?usp=drive_link&ouid=109807022555841161079&rtpof=true&sd=true',
        ''
    ]
    const data3 = [{ name: 'Introduction To Machine Learning', video: 'Video 1', code: '-', assignment:'PPT' ,quiz:'-'},];
    const links4 = [
        '',
        'https://drive.google.com/file/d/19tcYi4ULCuPohVSFvObIoe-C7VSbn4eN/view?usp=drive_link',
        '',
        'https://drive.google.com/drive/folders/1iPLfdVl_AK1Iq4HFYZwZf2ATD30oYV1m?usp=drive_link',
        ''
    ]
    const data4 = [{ name: 'Basics of Java', video: 'Video 1', code: '-', assignment:'PPT' ,quiz:'-'},];
    
    return(
        <div>
            <Header/>
            <div>
                <div style={{color:'white',marginLeft:'52px',fontSize:'22px',marginTop:'35px'}}>Competitive Programming</div>
                <Tables head={'Day 1 - Divide and Conquer'} data={data1} links={links1} vdlink={vd1cp}/>
            </div>
            <div>
                <div style={{color:'white',marginLeft:'52px',fontSize:'22px',marginTop:'35px'}}>Ethical Hacking</div>
                <Tables head={'Day 1 - Introduction To Linux'} data={data2} links={links2} vdlink={vd1eh}/>
            </div>
            <div>
                <div style={{color:'white',marginLeft:'52px',fontSize:'22px',marginTop:'35px'}}>Machine Learning</div>
                <Tables head={'Day 1 - Introduction'} data={data3} links={links3}/>
            </div>
            <div>
                <div style={{color:'white',marginLeft:'52px',fontSize:'22px',marginTop:'35px'}}>Java</div>
                <Tables head={'Day 1 - Basics of Java'} data={data4} links={links4}/>
            </div>
            
            
        </div>
    )
}

export default Content