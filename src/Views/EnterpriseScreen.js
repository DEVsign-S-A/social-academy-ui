import { Redirect, useParams } from "react-router";
import { AboutPyme } from "../Components/UI_PymeProfile/AboutPyme";
import { PymeExperience } from "../Components/UI_PymeProfile/pymeExperience";
import { PymeInfo } from "../Components/UI_PymeProfile/PymeInfo";
import { getMypimeById } from "../Services/getMypimeById";

const EnterpriseScreen = () => {

    const {pymeId} = useParams();
    const pymeProfile = getMypimeById(pymeId);

    console.log(pymeProfile);

  return (
    <div className = "flex flex-row ProfileScreen">
      {
        (!pymeProfile) ? ( <Redirect to = "/PageNoFound" />) : (
          <>
            <PymeInfo {...pymeProfile} />
            <AboutPyme {...pymeProfile} />
            <PymeExperience {...pymeProfile} />
          </>
        )
      }
    </div>
  )
}
 
export default EnterpriseScreen;