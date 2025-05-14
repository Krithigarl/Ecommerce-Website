import { Head } from "../components/Head"
import { Tab } from "../components/Tab"
import { Slider } from "../components/Slider"
import { Phone } from "../components/Phone"
import { Acessories } from "../components/Acessories"

import { Banner } from "../components/Banner"
import { Catergories } from "../components/catergories"
import { Lists } from "../components/Lists"
import { Vocher } from "../components/Vocher"
import { Box } from "../components/Box"



export const Home= () => {
    return (
        <div>
<Head />
<Tab />
<Slider />
<Phone />
<Acessories />

<Banner />
<Catergories />
<Lists />
<Vocher />
<Box /> 

           
        </div>
    )
}
export default Home