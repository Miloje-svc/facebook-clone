import { useSelector } from 'react-redux'
import { Container } from './SidebarElements'
import { useState } from 'react'
import SidebarOption from '../sidebaroption'

const Sidebar = () => {
  const [show, setShow] = useState(false)
  const user = useSelector(state => state.user)

  const changeShow = () => {
    setShow(show => !show)
  }

  return (
    <Container>
      {user && (
        <SidebarOption img={user?.photoURL} text={user?.displayName} />
      )}
      <SidebarOption
        img="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png?_nc_eui2=AeGWMnc7qUHdBv12SSvqCxtTC4TVz-PYFxULhNXP49gXFXHzu-f7WqYAOTSP2kHjnBL-DJgsCmFJ7DhYqIyuW1MJ"
        text="COVID-19 Information Center" />
      <SidebarOption
        img="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeEDr09fVw382iAYIlZMTBGoqfpKmA4GtxSp-kqYDga3FIaCbbRNCulqpyOJkKKroPN0CnJZ1j9CFIo72ux33YB_"
        text="Friends" />
      <SidebarOption
        img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeH65-Nxcm14VGiiXaZMMumAZ3xAUM5_bWpnfEBQzn9tarz9OOmXlpoeSFApgCoq15Ud2ZcWklvv6mSS9k85tnus"
        text="Groups" />
      <SidebarOption
        img="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png?_nc_eui2=AeGeO2kOvAy_Ju1Wy2wZjLimeGQYcQV2gv94ZBhxBXaC_8jrh0A4EtlCkY3yn8kXnGRDbHklqKcwFwefwXF8CUv2"
        text="Events" />
      <SidebarOption
        img="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png?_nc_eui2=AeEPtMJZEuLD3vLZw4I59KCyFvGCZ9KBlcEW8YJn0oGVwZ1er7QLcOOcc_xx24_q20QfaePTma1PGti6oxwpVpZ6"
        text="Memories" />
      <SidebarOption
        img="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png?_nc_eui2=AeGij1IiPMznPbU3U3_9HP4b-5kYScafj0T7mRhJxp-PRHbvvxtkiyIK44zl2mzazsKWs_50AsQuPLRPQfgX9jhJ"
        text="Saved" />
      <SidebarOption
        img="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeGliu3TR1hyzVkPpE-yOqNXtEPFOzh_t-u0Q8U7OH-363QUlmeepGeMlJEKVrKstjTrLbW_R8ukKzK034-1C2xF"
        text="Pages" />
      {show && (
        <>
          <SidebarOption
            img="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/CwKNCefmHON.png?_nc_eui2=AeEYhSAZExhB_0cSIo1ndPeOdJ1I9kdbuqh0nUj2R1u6qC1CNyqL7WX98fLsRYnDpvhv7HsDILnGpyVlOP6SC7pr"
            text="Add Center" />
          <SidebarOption
            img="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png?_nc_eui2=AeHEULce3RSUTokTvLCSbIBe1AOmmFeO9TXUA6aYV471NY-oKk5_FKlr5ksWkJi-M9Bk7_mBL_arj5xyFj5Ojzx9"
            text="Ads Menager" />
          <SidebarOption
            img="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/29AMNpNZ4Vm.png?
        _nc_eui2=AeH7xzbhIvM5-_yLYCbMjIAU9R8yX5XQiUn1HzJfldCJSSe-2laAWRUZSL4XxHVdGV1gC3Q_EjvZw-215W1UH8E7"
            text="Campus" />
          <SidebarOption
            img="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/9s7nhm949yb.png?_nc_eui2=AeEZXobSlNpJGnGsk52dlrQAeGGnOd3v9yJ4Yac53e_3ItWlDv_r2YuyLUEZb05eq5uZ10h8f9WipyM1CtwSIdOV"
            text="Community Help" />
          <SidebarOption
            img="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png?_nc_eui2=AeFRklTEQmZNFiopvEwEvOysVivWqxwsAktWK9arHCwCS-ttsZlydPSArT0ELxBuchWdfkMTG_MhmZUbos0NCW5H"
            text="Favorites" />
          <SidebarOption
            img="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png?_nc_eui2=AeFAIg8GR-uK9LhDufVqbihSu50TebM96Ti7nRN5sz3pOBNPCs3MZUTOvDMnesexAhMdfggyerGuVh_X0onvdVrz"
            text="Friends Lists" />
          <SidebarOption
            img="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png?_nc_eui2=AeGlbmpd6Z209BfM4miTVfe7GHN9ptS2mJ0Yc32m1LaYnbD6DNUgaGvhBFr1zBleB_gqHZHjusv-c48gptrrE1Lc"
            text="Foundraisers" />
          <SidebarOption
            img="https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png?_nc_eui2=AeEVApVhMT34NFjXZK9YPqbTnh-wUgbTF8ueH7BSBtMXy3yq86KEBmSS1iZUqz0DtM38amo4lQesD5lUow8DtnU0"
            text="Games" />
          <SidebarOption
            img="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/9bekmF_PzNp.png?_nc_eui2=AeEM4mPcq--hb3N-S32BIFH9yvIGC04LZmDK8gYLTgtmYNsTuWWQFhrJ4AcN13xU-CUuWzeuTAREYP1lGvDnRk31"
            text="Gaming Video" />
          <SidebarOption
            img="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png?_nc_eui2=AeEZx37HiIe3fdhy8OX5SsBeU4NMTXfNRG1Tg0xNd81EbU07yK5pp0s5x3k_GXBGyEgoDaN2Gi_vJTaQ4-f2o2Df"
            text="Jobs" />
          <SidebarOption
            img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png?_nc_eui2=AeG2A4R62clUYnFw5vwnGtCuhcFGLuoBbQiFwUYu6gFtCACSuW133mwdTx9ytxBKFMgjDTmTlGqs71xHN-010nfR"
            text="Messanger" />
          <SidebarOption
            img="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png?_nc_eui2=AeFrnyareCBJrCZWJ_oOqeHkllZwvcck4C-WVnC9xyTgLx2iAetGbup11u1yClzGV9asqW9gQF_9jU3Mn2Jmmp-a"
            text="Most Recent" />
          <SidebarOption
            img="https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/NYOGcd-z-qs.png?_nc_eui2=AeGGRoYUCLLTSzAMDcNW9Gx5CtL2vQiEDDAK0va9CIQMMMvwffGC-2vLuCj9s4yqc74N_ijplZYqwT0ifkQXiISn"
            text="Offers" />
          <SidebarOption
            img="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png?_nc_eui2=AeEWEG3-z12F1moTAkrYiYwV85aAcSfQVKbzloBxJ9BUpj7Z3EUIaVKkvAQDh-6reQgg2w9ddejquvTLZBZBXb_0"
            text="Recent Ad Activity" />
          <SidebarOption
            img="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png?_nc_eui2=AeFaJ4ZlqSi4IkxEEXqUXS74dpCQBhan_k52kJAGFqf-TlRv4vNL-rsOrPtbgVxi5-PSiyB6xJ-Rx751A6N8Zo-f"
            text="Weather" />
        </>
      )}
      <SidebarOption
        onclick={changeShow}
        img={require(user ? "../../assets/images/arrow-down.png" : "../../assets/images/arrow-up.png").default}
        text={show ? "Show Less" : "Show More"} />
    </Container>
  )
}

export default Sidebar
