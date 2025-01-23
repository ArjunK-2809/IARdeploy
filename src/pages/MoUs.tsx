import './common.css'
import './MoUs.css'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Taiwan_Signed from '../files/MoU_CGU_Taiwan_Signed.pdf'
import KU from '../files/MOU KU Nepal-IITPKD, India 2022_compressed.pdf'
import Agder_Norway from '../files/University_of_Agder_Norway_MOU.pdf'
import SICI from '../files/Signed-SICI member Application form.pdf'
import FrenchIITpkd from '../files/Indo French Network MoU_Eng version_compressed.pdf'

import australia from '../assets/australia.png'
import canada from '../assets/canada.png'
import germany from '../assets/Germany.png'
import ireland from '../assets/Ireland.png'
import japan from '../assets/japan.png'
import nepal from '../assets/Nepal.jpg'
import norway from '../assets/norway.png'
import roamnia from '../assets/Romania.png'
import srilanka from '../assets/sri_lanka.png'
import taiwan from '../assets/Taiwan.png'
import uk from '../assets/UK.png'
import zimbabwe from '../assets/Zimbabwe.png'
import ethiopa from '../assets/Ethiopa.png'
import france from '../assets/france.png'
import finland from '../assets/finland.png'

import Swinburne from '../assets/swinburne.png'
import Shastri from '../assets/Shastri.jpg'
import Daad from '../assets/Daad.jpeg'
import Charite from '../assets/Charite.png'
import Queens from '../assets/Queens.png'
import Shibaura from '../assets/shibaura.png'
import Nagaoka from '../assets/Nagaoka.png'
import Kathmandu from '../assets/kathmandu.png'
import Agder from '../assets/agder.png'
import Iasi from '../assets/Iasi_logo.png'
import Peradeniya from '../assets/University_of_Peradeniya_crest.png'
import Chang from '../assets/chang_gung.png'
import Liverpool from '../assets/liverpool.png'
import Harare from '../assets/harare.jpg'
import MinT from '../assets/mint.png'
import Dambi from '../assets/dambi_dollo.jpg'
import Bretgane from '../assets/bretagne-sud.jpg'



function MoUs(){

    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);


    return (
    <>
    <div id="partners"></div>
        <div className="subpage">
        <h1 style={{textAlign:"left",fontSize:'2em'}}> Our Partners and Programs </h1>
        <div className="table-container"  >
        <table className="centered-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Country</th>
                        <th>Partner University/ Organisation </th>
                        <th>Type of MoU</th>
                        <th>MoU document</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td> Australia <img src={australia} alt="Australia" width="150" height="64.5" ></img></td>
                        <td><a href="https://www.swinburne.edu.au/">Swinburne University</a>
                        <img src={Swinburne} alt="Swinburne University" width="150" height="84.5" ></img> </td>
                        <td>IPTIF, IITPKD and Swinburne tripartite MoU</td>
                        <td><a href='https://drive.google.com/file/d/1U0C5Lwf_bd_J8v_QpOJr9RmQlPCSvRHc/view'>Swinburne University of Technology and IPTIF and IITPKD </a> </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td> Canada <img src={canada} alt="Canada" width="150" height="84.5" ></img></td>
                        <td><a href='https://www.shastriinstitute.org/'>Shastri Indo Canadian Institute</a>
                        <img src={Shastri} alt="Shastri Indo Canadian Institute" width="160" height="104.5" ></img> </td>
                        <td>Membership agreement</td>
                        <td><a href={SICI} target="blank">SICI-IITPKD membership agreement</a> </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td> Germany <img src={germany} alt="Germany" width="150" height="64.5" ></img></td>
                        <td><a href='https://www.daad.de/en/'>DAAD</a><br/>
                        <img src={Daad} alt="DAAD" width="150" height="104.5" ></img> </td>
                        <td>Faculty exchange program</td>
                        <td><a href='https://drive.google.com/file/d/1ZbffuIBMSJoHbKAa7RWzCzFh9jgjKvm-/view'>IITPKD-DAAD Faculty program </a> </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><a href='https://www.charite.de/en/'>Charité Universitätsmedizin Berlin</a><br/>
                        <img src={Charite} alt="Charité Universitätsmedizin Berlin" width="150" height="64.5" ></img> </td>
                        <td>Academic exchange program (Generic MoU)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td> Ireland <img src={ireland} alt="Ierland" width="150" height="64.5" ></img></td>
                        <td><a href='https://www.qub.ac.uk/'>The Queen’s University of Belfast</a>
                        <img src={Queens} alt="The Queen’s University of Belfast" width="150" height="64.5" ></img> </td>
                        <td>Academic exchange program</td>
                        <td><a href='https://drive.google.com/file/d/1WJr7SwSP8TiBR5Sk-AZW0NVysJHzuOyc/view'>The Queen’s University of Belfast and IIT Palakkad </a> </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td> Japan <img src={japan} alt="Japan" width="150" height="64.5" ></img> </td>
                        <td><a href='https://www.shibaura-it.ac.jp/en/index.html'>Shibaura Institute of Technology (SIT)</a><br/>
                        <img src={Shibaura} alt="Shibaura Institute of Technology" width="150" height="104.5" ></img> </td>
                        <td>Academic exchange program and Joint activities</td>
                        <td><a href='https://drive.google.com/file/d/1yVYfmZEUtIrWIUHR-kToEsClk2205Ilw/view'>Shibaura Institute of Technology and IIT Palakkad MoU</a> </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><a href='https://www.nagaokaut.ac.jp/e/'>Nagaoka University of Technology (NUT)</a>
                        <img src={Nagaoka} alt="Nagaoka University of Technology" width="160" height="74.5" ></img> </td>
                        <td>Academic exchange program and Joint Research (Mechanical department)</td>
                        <td><a href='https://drive.google.com/file/d/1TNK-k7kKDYUgCg6F5w8A8QQzX78ERYtI/view'>Nagaoka University of Technology and IIT Palakkad MoU </a> </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td> Nepal <img src={nepal} alt="Nepal" width="150" height="64.5" ></img></td>
                        <td><a href='https://ku.edu.np/'>Kathmandu University</a>
                        <img src={Kathmandu} alt="Kathmandu University" width="150" height="104.5" ></img> </td>
                        <td>Academic exchange program (Generic MoU)</td>
                        <td><a href={KU}>Kathmandu University-IITPKD MoU </a> </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td> Norway <img src={norway} alt="Norway" width="150" height="64.5" ></img></td>
                        <td><a href='https://www.uia.no/english/'>University of Agder</a>
                        <img src={Agder} alt="University of Agder" width="150" height="64.5" ></img> </td>
                        <td>Academic exchange program and Joint Research</td>
                        <td><a href={Agder_Norway}>University of Agder </a> </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td> Romania <img src={roamnia} alt="Romania" width="150" height="64.5" ></img></td>
                        <td><a href='https://www.tuiasi.ro/?lang=en'>Gheorghe Asachi Technical University of Iasi</a>
                        <img src={Iasi} alt="Gheorghe Asachi Technical University of Iasi" width="150" height="104.5" ></img> </td>
                        <td>Academic exchange program (Generic MoU)</td>
                        <td><a href='https://drive.google.com/file/d/1AtEV3E7uHk-KqVEiF7QCBmMMzR6pkLbr/view'>&quot;Gheorghe Asachi&quot; Technical University of Lasi, Romania (TUIASI) </a> </td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td> Srilanka <img src={srilanka} alt="Srilanka" width="150" height="64.5" ></img></td>
                        <td><a href='https://www.pdn.ac.lk/'>University of Peradeniya</a>
                        <img src={Peradeniya} alt="University of Peradeniya" width="120" height="104.5" ></img> </td>
                        <td>Academic exchange program and Joint activities</td>
                        <td><a href='https://drive.google.com/file/d/1zcN5j4w49WJ6Ub5wnMdhHaJ04MkSLcFR/view'>University of Peradeniya</a> </td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td> Taiwan <img src={taiwan} alt="Taiwan" width="150" height="64.5" ></img></td>
                        <td><a href='https://www.cgu.edu.tw/en'>Chang Gung University</a>
                        <img src={Chang} alt="Chang Gung University" width="120" height="104.5" ></img> </td>
                        <td>Academic exchange program (Generic MoU)</td>
                        <td><a href={Taiwan_Signed}>Chang Gung University</a> </td>
                    </tr>
                   
                    <tr>
                        <td>11</td>
                        <td> United Kingdom <img src={uk} alt="United Kingdom" width="150" height="64.5" ></img></td>
                        <td><a href="https://www.liverpool.ac.uk/">University of Liverpool</a>
                        <img src={Liverpool} alt="University of Liverpool" width="150" height="104.5" ></img> </td>
                        <td>Academic exchange program and Joint activities</td>
                        <td><a href='https://drive.google.com/file/d/1NXG3ClKqpcl6OmO9gpVLr62NtnnXJs3p/view'>University of Liverpool and IIT Palakkad </a> </td>
                    </tr>

                    <tr>
                        <td>12</td>
                        <td> Zimbabwe <img src={zimbabwe} alt="Zimbabwe" width="150" height="64.5" ></img></td>
                        <td><a href="https://www.hit.ac.zw/">Harare Institute of Technology</a>
                        <img src={Harare} alt="Harare Institute of Technology" width="150" height="64.5" ></img> </td>
                        <td>Academic exchange program (Generic MoU)</td>
                        <td><a href='https://drive.google.com/file/d/1yMFt21PsDg2ptIyq9LtRKqxrJZ9zytQR/view'>Harare Institute of Technology (HIT) and IIT Palakkad</a> </td>
                    </tr>
                        
                </tbody>
            </table>
        </div>


        <h1 style={{textAlign:"left",fontSize:'2em'}} id="doctoral" > Joint Doctoral Programs </h1>
        <div className="table-container" >
        <table className="centered-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Country</th>
                        <th>Partner University/ Organisation </th>
                        <th>Type of MoU</th>
                        <th>MoU document</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td> Ethiopia <img src={ethiopa} alt="Ethiopia" width="150" height="64.5" ></img></td>
                        <td><a href="http://www.mint.gov.et/">The Ministry of Innovation and Technology</a><br/>
                        <img src={MinT} alt="The Ministry of Innovation and Technology" width="150" height="104.5" ></img> </td>
                        <td>Joint Doctoral Program</td>
                        <td><a href='https://drive.google.com/file/d/1CuegWyygPIEBwOrFLdj6pxUYT4O2n9t7/view'>The Ministry of Innovation and Technology, Ethiopia </a> </td>
                    </tr>

                    <tr>
                        <td> </td>
                        <td> </td>
                        <td><a href="https://dadu.edu.et/">Dambi Dollo University</a>
                        <img src={Dambi} alt="Dambi Dollo University" width="150" height="104.5" ></img> </td>
                        <td>Joint Doctoral Program</td>
                        <td><a href='https://drive.google.com/file/d/1YYRhrHYhojlcN70s7DS-eQo1ZIMjjb1E/view'>Dambi Dollo University, Ethiopia </a> </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td> Norway <img src={norway} alt="Norway" width="150" height="64.5" ></img></td>
                        <td><a href="https://www.uia.no/english/">University of Agder</a>
                        <img src={Agder} alt="University of Agder" width="150" height="64.5" ></img> </td>
                        <td>Cotutelle</td>
                        <td><a href='https://drive.google.com/file/d/1Z3paXHnE7Ir2RYgU1NF14kz27X1a6bAl/view'>University of Agder Cotutelle Agreement</a> </td>
                    </tr>
                    
                    
                    
                </tbody>
            </table>
        </div>
        <h1 style={{textAlign:"left",fontSize:'2em'}}  id="supervision">  Joint Supervison Programs </h1>

        <div className="table-container">
        <table className="centered-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Country</th>
                        <th>Partner University/ Organisation </th>
                        <th>Type of MoU</th>
                        <th>MoU document</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>1</td>
                        <td> France <img src={france} alt="France" width="150" height="64.5" ></img></td>
                        <td><a href="https://www.univ-ubs.fr/en/index.html">University of Britagne Sud</a>
                        <img src={Bretgane} alt="University of Britagne Sud" width="150" height="64.5" ></img> </td>
                        <td>Co-supervision</td>
                        <td><a href='https://drive.google.com/file/d/1q8OG0fmlKzRzc1saBjFHY7x9Nq34VHIa/view'>The Université de Bretagne Sud</a> </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        <h1 style={{textAlign:"left",fontSize:'2em'}} id="consortium"> Consortium Agreements (University Network)  </h1>
        <div className="table-container">
        <table className="centered-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Country</th>
                        <th>Partner University/ Organisation </th>
                        <th>Type of MoU</th>
                        <th>MoU document</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>1</td>
                        <td> Finland <img src={finland} alt="Finland" width="150" height="64.5" ></img></td>
                        <td>Consortium of Finnish Universities and IIT’s</td>
                        <td>Academic exchange and joint research activities</td>
                        <td><a href='https://drive.google.com/file/d/1m_t3L7MhL9bpPoe2dyVu-ImMOKJJ5Vic/view'>Finnish Universities and IIT Palakkad MoU  </a> </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td> Germany <img src={germany} alt="Germany" width="150" height="64.5" ></img></td>
                        <td>Consortium of Technical Universities (TU’s) and IIT’s </td>
                        <td>Academic exchange and joint research activities</td>
                        <td><a href='https://drive.google.com/file/d/1oJV6YeiedJv2aS5Vj-u3FO5NwaQMCjOK/view'>TU9 German Universities and IIT Palakkad</a> </td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td> France <img src={france} alt="France" width="150" height="64.5" ></img></td>
                        <td>Consortium of French Universities and IIT’s </td>
                        <td>Academic exchange and joint research activities</td>
                        <td><a href={FrenchIITpkd}>French  universities and IIT Palakkad MoU</a> </td>
                    </tr>

                    
                </tbody>
            </table>
        </div>
        </div>
        </>
        )
}
export default MoUs