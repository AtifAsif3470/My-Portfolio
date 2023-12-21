import style from "./style.module.scss"
import { VscGraph } from "react-icons/vsc";
import { MdOutlineDesk, MdResetTv } from "react-icons/md";
import { LuLampDesk } from "react-icons/lu";
import { GiSkeletalHand } from "react-icons/gi";
import { TbDeviceMobileCode } from "react-icons/tb";


const Services = () => {
    return (
        <main className="container">
            <div className={style.servicMe}>
                <p className={style.servictxt}>services</p>
                <div className={style.lineDIv}></div>
            </div>
            <div className={style.ServicesBox}>
                <div className={style.boxDiv}>
                    <div className={style.iconDiv}><GiSkeletalHand /></div>
                    <h2 className={style.iconboxTitle}>Sketches</h2>
                    <div>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</div>
                </div>
                <div className={style.boxDiv}>
                    <div className={style.iconDiv}><MdOutlineDesk /></div>
                    <h2 className={style.iconboxTitle}>UI/UX Design</h2>
                    <div>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</div>
                </div>
                <div className={style.boxDiv}>
                    <div className={style.iconDiv}><LuLampDesk /></div>
                    <h2 className={style.iconboxTitle}>Product Design</h2>
                    <div>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</div>
                </div>
                <div className={style.boxDiv}>
                    <div className={style.iconDiv}><TbDeviceMobileCode /></div>
                    <h2 className={style.iconboxTitle}>App Design</h2>
                    <div>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</div>
                </div>
                <div className={style.boxDiv}>
                    <div className={style.iconDiv}><VscGraph /></div>
                    <h2 className={style.iconboxTitle}>Motion Graphics</h2>
                    <div>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</div>
                </div>
                <div className={style.boxDiv}>
                    <div className={style.iconDiv}><MdResetTv /></div>
                    <h2 className={style.iconboxTitle}>Responsive Design</h2>
                    <div>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</div>
                </div>
            </div>
        </main>
    )
}
export default Services;


// import { Checkbox, Col, Form, Row } from 'antd'
// import React, { useEffect, useState } from 'react'
// import { useStore } from '@stores/root-store'
// import { SkeletonRingLoader } from '@commonComponents/ring-loader'
// import { observer } from 'mobx-react'
// import { CommonSelect } from '@commonComponents/select';
// import { CHECKED, REASON, REASON_TITLE, VERTICAL } from 'constant/constant'
// import { ASSET, CANTEEN_TITLE, LOAN_TITLE, RESIGN_TITLE, SALARY_TITLE, TERMINATE_TITLE } from './constant'
// import { requiredMessage } from '@utils/common-functions'

// let finalAssetData

// const Applyclearance = observer(({ closeModal, setRefreshTable }) => {
//   const [load, setLoad] = useState(false);
//   const [form] = Form.useForm()
//   const [assetsEmptArr] = useState<any | []>([]);

//   const {
//     empClearanceModal: { loadEmpClearance, getempclearancedata },
//     clearanceModel: { setClearance },
//   } = useStore(null)

//   useEffect(() => {
//     async function loadData() {
//       if (!getempclearancedata?.length) {
//         setLoad(true)
//         await loadEmpClearance(true)
//         setLoad(false)
//       }
//     }
//     loadData()
//   }, [])

//   const onSubmit = async e => {
//     await setClearance({
//       employee: e.employee,
//       reason: e.reason,
//       loan_status: e.loan || false,
//       e_canteen_status: e.e_canteen || false,
//       salary_status: e.salary || false,
//       asset_list: finalAssetData
//     })
//     closeModal(false)
//     setRefreshTable(true)
//   }

//   const mydata = assetsEmptArr.map(mydata => {
//     return (
//       <Form.Item>
//         <Checkbox>
//           <div>
//             <p>{mydata}</p>
//           </div>
//         </Checkbox>
//       </Form.Item>
//     )
//   })

//   return (
//     <Form
//       form={form}
//       onFinish={onSubmit}
//       id='clearance-form'
//       initialValues={{
//         'checkbox-group': ['1', '2'],
//       }}
//       layout={VERTICAL}>
//       {
//         load ?
//           <SkeletonRingLoader />
//           : (
//             <>
//               <div className='form-auto-height'>
//                 <Row gutter={[12, 24]}>
//                   <Col span={24}>
//                     <Form.Item name={REASON} label={`Leave Office ${REASON_TITLE}`} rules={requiredMessage(`Leave office ${REASON}`)}>
//                       <CommonSelect
//                         showArrow
//                         placeholder={`Select ${REASON_TITLE}`}
//                         data={[{ key: RESIGN_TITLE, value: RESIGN_TITLE }, { key: TERMINATE_TITLE, value: TERMINATE_TITLE }]}
//                       />
//                     </Form.Item>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col span={24} className='mb-2'>
//                     <h3>Employee Clearance Checklist</h3>
//                     <div>
//                       <Form.Item valuePropName={CHECKED}>
//                         <Checkbox>
//                           <span>
//                             <span> Asset 1</span>
//                           </span>
//                         </Checkbox>
//                       </Form.Item>
//                       <Form.Item valuePropName={CHECKED}>
//                         <Checkbox>
//                           <span>
//                             <span>Asset 2</span>

//                           </span>
//                         </Checkbox>
//                       </Form.Item>
//                       <Form.Item valuePropName={CHECKED}>
//                         <Checkbox>
//                           <span >
//                             <span >Asset 3</span>
//                           </span>
//                         </Checkbox>
//                       </Form.Item>
//                       <Form.Item valuePropName={CHECKED}>
//                         <Checkbox>
//                           <span >
//                             <span >Asset 4</span>
//                           </span>
//                         </Checkbox>
//                       </Form.Item>
//                       <Form.Item valuePropName={CHECKED}>
//                         <Checkbox>
//                           <span>
//                             <span>Asset 5</span>
//                           </span>
//                         </Checkbox>
//                       </Form.Item>
//                     </div>
//                   </Col>
//                 </Row>
//                 <Row >
//                   <Col xs={24} md={12} lg={12} className='mb-2'>
//                     <div>
//                       <Form.Item name={`${ASSET}_list`}>
//                         <Form.Item valuePropName={CHECKED} name={`${ASSET}1`}>
//                           <Form.Item>{mydata}</Form.Item>
//                         </Form.Item>
//                       </Form.Item>
//                     </div>
//                   </Col>
//                   <Col xs={24} md={12} lg={12} className='mb-2'>
//                     <div>
//                       <h3>Major Assets</h3>
//                       <h4>{LOAN_TITLE}</h4>
//                       <Form.Item valuePropName={CHECKED} name='loan'>
//                         <Checkbox>
//                           <span>
//                             <span> Company {LOAN_TITLE}</span>
//                             - <span>
//                               5,000 PKR
//                             </span>
//                           </span>
//                         </Checkbox>
//                       </Form.Item>

//                       <p>{SALARY_TITLE}</p>
//                       <Form.Item valuePropName={CHECKED} name='salary'>
//                         <Checkbox>
//                           <span >
//                             <span >Employee {SALARY_TITLE}</span>
//                             - <span >
//                               500 PKR
//                             </span>
//                           </span>
//                         </Checkbox>
//                       </Form.Item>
//                       <p>E-{CANTEEN_TITLE}</p>
//                       <Form.Item valuePropName={CHECKED} name='e_canteen'>
//                         <Checkbox>
//                           <span >
//                             <span >{CANTEEN_TITLE} Bill</span>
//                             - <span >
//                               500 PKR
//                             </span>
//                           </span>
//                         </Checkbox>
//                       </Form.Item>
//                     </div>
//                   </Col>
//                 </Row>
//               </div>
//             </>
//           )
//       }
//     </Form>
//   )
// })

// export default Applyclearance




// import { observer } from 'mobx-react'

// import { Card,Col, DatePicker } from 'antd'

// import { Label } from '@commonComponents/label'
// import { MdVisibility } from 'react-icons/md'

// const TodayAbsent = observer(() => {

//   return (
//     <Col xs={24} sm={22} lg={6}>
//       <Card>
//         <Label>  
//               Select Date
//           <MdVisibility></MdVisibility>
//         </Label>
//         <DatePicker
//           format='MM/DD/YYYY'
//           getPopupContainer={trigger => trigger.parentElement}
//           className='w-100 inputField'
//           placeholder='Jan 12, 2023'
//         />
//       </Card>
//     </Col>  )
// })
// export default TodayAbsent
