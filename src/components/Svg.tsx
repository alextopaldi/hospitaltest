interface SvgProps {
    id : string
}

export function Svg({id} : SvgProps) {
    switch (id) {
        case 'heart':
            return(
                <svg className="svg-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 5.95102C18 8.41251 16.2473 10.4759 14.9289 11.8139C14.7913 11.9535 14.6096 12.0234 14.4279 12.0234C14.2497 12.0234 14.0716 11.9561 13.9345 11.8212C13.6579 11.5486 13.6546 11.1033 13.9272 10.8269C15.7464 8.98064 16.5938 7.43129 16.5938 5.95102C16.5938 3.77188 15.1769 2.25 13.1484 2.25C11.8294 2.25 10.8555 2.74617 10.2535 3.72491C9.77591 4.50179 9.70148 5.31038 9.70079 5.31848C9.67264 5.68474 9.36722 5.96599 8.99986 5.96599C8.63251 5.96599 8.32709 5.68158 8.29893 5.31532C8.29852 5.31038 8.22409 4.50179 7.74632 3.72491C7.14455 2.74617 6.17061 2.25 4.85156 2.25C2.82307 2.25 1.40625 3.77188 1.40625 5.95102C1.40625 6.93375 1.7791 7.94421 2.54471 9.03516H4.21367L5.38014 6.65181C5.50017 6.40668 5.75217 6.25218 6.02422 6.25795C6.29723 6.26276 6.54263 6.42522 6.65387 6.67447L8.09047 9.89456L9.00536 8.08511C9.12415 7.85028 9.36406 7.70142 9.62718 7.69922H9.63295C9.89388 7.69922 10.1334 7.84369 10.2551 8.07495L10.7604 9.03516H12.3398C12.7282 9.03516 13.043 9.34991 13.043 9.73828C13.043 10.1266 12.7282 10.4414 12.3398 10.4414H10.3359C10.0749 10.4414 9.83537 10.2968 9.7137 10.0658L9.64531 9.93576L8.67824 11.8485C8.55849 12.0855 8.31555 12.2344 8.05092 12.2344C8.04515 12.2344 8.03952 12.2342 8.03375 12.2341C7.76253 12.2276 7.51932 12.0655 7.40863 11.8177L5.98219 8.62056L5.28387 10.0474C5.16591 10.2886 4.92078 10.4414 4.6523 10.4414H0.703125C0.314758 10.4414 0 10.1266 0 9.73828C0 9.34991 0.314758 9.03516 0.703125 9.03516H0.881378C0.289764 7.98871 0 6.97192 0 5.95102C0 4.4577 0.490265 3.17189 1.41792 2.23256C2.30219 1.3369 3.52167 0.84375 4.85156 0.84375C7.17668 0.84375 8.37886 2.04016 8.97789 3.04376C8.98531 3.05612 8.99272 3.06862 9 3.08112C9.00728 3.06862 9.01469 3.05612 9.02211 3.04376C9.62114 2.04016 10.8233 0.84375 13.1484 0.84375C14.4783 0.84375 15.6978 1.3369 16.5821 2.23256C17.5097 3.17189 18 4.4577 18 5.95102ZM11.4542 13.1038L11.4381 13.118C10.5444 13.902 9.69008 14.6522 9 15.387C8.30992 14.6521 7.45546 13.902 6.56172 13.1178C6.08574 12.7003 5.59355 12.2686 5.11647 11.8299C4.83055 11.5671 4.38574 11.5858 4.12303 11.8717C3.86018 12.1575 3.87886 12.6023 4.16478 12.8651C4.65395 13.3149 5.15231 13.7521 5.63434 14.175C6.73572 15.1412 7.77612 16.0539 8.45233 16.894C8.45302 16.8949 8.45384 16.8957 8.45453 16.8967C8.45769 16.9005 8.46098 16.9043 8.46428 16.908C8.47691 16.9229 8.48996 16.9373 8.50369 16.9511C8.50452 16.9519 8.5052 16.9527 8.50589 16.9534C8.52251 16.9699 8.53981 16.9851 8.55766 16.9996C8.55821 17 8.55862 17.0004 8.55917 17.0008C8.55945 17.0012 8.55986 17.0013 8.56013 17.0016C8.57565 17.0141 8.59158 17.0258 8.60806 17.0368C8.60902 17.0375 8.61012 17.0381 8.61108 17.0388C8.6266 17.0491 8.64253 17.0589 8.65874 17.0678C8.65984 17.0685 8.66093 17.0692 8.66217 17.0697C8.67783 17.0784 8.69376 17.0862 8.7101 17.0936C8.71408 17.0954 8.7182 17.0971 8.72218 17.0988C8.73537 17.1045 8.74869 17.1098 8.76215 17.1146C8.76572 17.1159 8.76929 17.1174 8.77272 17.1186C8.78783 17.1237 8.80307 17.1281 8.81845 17.1322C8.82449 17.1339 8.8304 17.1352 8.83644 17.1367C8.84894 17.1398 8.86157 17.1424 8.87434 17.1447C8.87929 17.1455 8.88423 17.1465 8.88918 17.1473C8.90401 17.1497 8.91898 17.1514 8.93381 17.153C8.93916 17.1534 8.94438 17.1538 8.94974 17.1542C8.96581 17.1554 8.98187 17.1561 8.99794 17.1561C8.99849 17.1561 8.99918 17.1562 8.99973 17.1562H9.00014H9.00055C9.0011 17.1562 9.00165 17.1561 9.0022 17.1561C9.0184 17.1561 9.03433 17.1553 9.0504 17.1542C9.05576 17.1538 9.06111 17.1534 9.06633 17.153C9.0813 17.1514 9.09599 17.1498 9.11082 17.1473C9.11591 17.1466 9.12099 17.1455 9.12621 17.1447C9.1387 17.1424 9.1512 17.1398 9.1637 17.1367C9.16974 17.1354 9.17578 17.1339 9.18182 17.1322C9.19707 17.1281 9.21231 17.1237 9.22728 17.1186C9.23099 17.1174 9.2347 17.1159 9.2384 17.1145C9.25159 17.1098 9.26477 17.1046 9.27768 17.099C9.28194 17.0972 9.28619 17.0954 9.29031 17.0935C9.30638 17.0862 9.32231 17.0784 9.33783 17.0699C9.3392 17.0692 9.34058 17.0684 9.34195 17.0675C9.35788 17.0587 9.3734 17.0491 9.38878 17.039C9.39001 17.0383 9.39125 17.0375 9.39235 17.0366C9.40869 17.0258 9.42448 17.0141 9.44 17.0016C9.44028 17.0013 9.44069 17.0012 9.4411 17.0008C9.44165 17.0004 9.44206 17 9.44261 16.9994C9.46033 16.985 9.47763 16.9698 9.49425 16.9534C9.49507 16.9527 9.49576 16.9518 9.49658 16.9509C9.51018 16.9373 9.52336 16.9229 9.536 16.908C9.53915 16.9043 9.54245 16.9005 9.54561 16.8967C9.5463 16.8957 9.54712 16.8949 9.54794 16.894C10.224 16.0539 11.2643 15.1412 12.3657 14.1751L12.3819 14.1608C12.6737 13.9048 12.7028 13.4606 12.4467 13.1686C12.1904 12.8768 11.7462 12.8477 11.4542 13.1038Z" fill="#7761FF"/>
                    <defs>
                    <rect width="18" height="18" fill="white"/>
                    </defs>
                </svg>
            )
        case 'instr': 
            return (
                <svg className="svg-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6719 13.1484C11.2835 13.1484 10.9688 13.4632 10.9688 13.8516C10.9688 15.3636 9.73869 16.5938 8.22656 16.5938C6.71443 16.5938 5.48438 15.3636 5.48438 13.8516V11.8308L7.98404 8.20363C7.99942 8.18124 8.01315 8.15817 8.02565 8.13469C8.0733 8.09019 8.12027 8.04488 8.16614 7.99818C9.0666 7.08275 9.5625 5.80298 9.5625 4.39453C9.5625 4.38245 9.56223 4.37036 9.56154 4.35841L9.5625 1.63477C9.5625 0.733337 8.82916 0 7.92773 0H6.60938C6.22101 0 5.90625 0.314758 5.90625 0.703125V1.40625C5.90625 1.79462 6.22101 2.10938 6.60938 2.10938C6.99774 2.10938 7.3125 1.79462 7.3125 1.40625H7.92773C8.0538 1.40625 8.15625 1.5087 8.15625 1.63449L8.15529 4.39426C8.15529 4.40565 8.15556 4.41692 8.15611 4.42804C8.14101 6.48866 6.72638 7.98047 4.78125 7.98047C2.82568 7.98047 1.40625 6.47232 1.40625 4.39453C1.40625 4.3727 1.40488 4.351 1.40295 4.32957C1.40501 4.30815 1.40625 4.28659 1.40625 4.26462V1.63477C1.40625 1.5087 1.5087 1.40625 1.63477 1.40625H2.21567C2.23407 1.77827 2.54141 2.07422 2.91797 2.07422C3.30634 2.07422 3.62109 1.75946 3.62109 1.37109V0.703125C3.62109 0.314758 3.30634 0 2.91797 0H1.63477C0.733337 0 0 0.733337 0 1.63477V4.26462C0 4.28659 0.00137329 4.30815 0.0032959 4.32957C0.00137329 4.351 0 4.3727 0 4.39453C0 5.80298 0.495895 7.08275 1.39636 7.99818C1.42451 8.02675 1.45294 8.0549 1.48164 8.08264C1.49963 8.12439 1.52174 8.1649 1.54852 8.20363L4.07812 11.8743V13.8516C4.07812 16.1391 5.93907 18 8.22656 18C10.5141 18 12.375 16.1391 12.375 13.8516C12.375 13.4632 12.0602 13.1484 11.6719 13.1484ZM4.78125 9.38672C5.02336 9.38672 5.26204 9.36955 5.49577 9.33604L4.76628 10.3946L4.03322 9.33096C4.27766 9.36777 4.5276 9.38672 4.78125 9.38672ZM16.5938 7.53896V2.8125C16.5938 1.26164 15.3321 0 13.7812 0C12.2304 0 10.9688 1.26164 10.9688 2.8125V10.3359C10.9688 10.7243 11.2835 11.0391 11.6719 11.0391C12.0602 11.0391 12.375 10.7243 12.375 10.3359V2.8125C12.375 2.03714 13.0059 1.40625 13.7812 1.40625C14.5566 1.40625 15.1875 2.03714 15.1875 2.8125V7.53896C14.3692 7.82913 13.7812 8.61067 13.7812 9.52734C13.7812 10.6905 14.7274 11.6367 15.8906 11.6367C17.0538 11.6367 18 10.6905 18 9.52734C18 8.61067 17.4121 7.82913 16.5938 7.53896ZM15.8906 10.2305C15.5029 10.2305 15.1875 9.91502 15.1875 9.52734C15.1875 9.13966 15.5029 8.82422 15.8906 8.82422C16.2783 8.82422 16.5938 9.13966 16.5938 9.52734C16.5938 9.91502 16.2783 10.2305 15.8906 10.2305Z" fill="white"/>
                </svg>
            )
        case 'message' :
            return(
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    
                    <path d="M16.4716 10.778C16.3262 10.4179 15.9162 10.2441 15.5562 10.3896C15.1962 10.5352 15.0224 10.945 15.1679 11.3051L15.9959 13.3535L13.5365 12.2694C13.3585 12.1908 13.1559 12.1896 12.977 12.266C12.1364 12.6245 11.2359 12.8064 10.3007 12.8064C6.53638 12.8064 4.00773 9.85913 4.00773 7.10637C4.00773 3.96332 6.83081 1.40625 10.3007 1.40625C13.7706 1.40625 16.5937 3.96332 16.5937 7.10637C16.5937 7.3515 16.5709 7.64511 16.531 7.9118C16.4738 8.29591 16.7387 8.65379 17.1227 8.71106C17.5068 8.76833 17.8647 8.50342 17.9219 8.11931C17.9722 7.78217 17.9999 7.42236 17.9999 7.10637C17.9999 5.19626 17.1911 3.40411 15.7223 2.05994C14.271 0.731552 12.3457 0 10.3007 0C8.25574 0 6.33038 0.731552 4.87909 2.05994C3.56663 3.26115 2.78166 4.82025 2.62936 6.5013C0.978529 7.59457 -7.80486e-05 9.34634 -7.80486e-05 11.2332C-7.80486e-05 12.4119 0.37126 13.5305 1.07823 14.4929L0.0511457 17.0333C-0.0561083 17.2987 0.0081617 17.6024 0.213606 17.8017C0.347502 17.9315 0.524107 18 0.703184 18C0.798903 18 0.895445 17.9805 0.986632 17.9403L3.94786 16.6349C4.69273 16.9122 5.48018 17.0526 6.29289 17.0526C6.31047 17.0526 6.32777 17.0512 6.34494 17.05C7.52048 17.041 8.66333 16.7318 9.65306 16.1532C10.5397 15.6349 11.269 14.9227 11.7803 14.0819C12.2793 13.9922 12.7673 13.8568 13.2409 13.6758L17.0132 15.3387C17.1044 15.3789 17.2008 15.3984 17.2967 15.3984C17.4757 15.3984 17.6522 15.3299 17.7861 15.2001C17.9917 15.0009 18.0558 14.6971 17.9486 14.4318L16.4716 10.778ZM6.29289 15.6445C6.28328 15.6445 6.27394 15.6455 6.26446 15.6459C5.54651 15.6423 4.85547 15.5012 4.21002 15.2258C4.03108 15.1495 3.82852 15.1507 3.65054 15.2291L2.00397 15.955L2.53515 14.6411C2.63334 14.3981 2.5883 14.1209 2.41829 13.9213C1.75622 13.1446 1.40617 12.215 1.40617 11.2332C1.40617 10.1096 1.87886 9.04504 2.70585 8.23782C2.96335 9.64133 3.68982 10.984 4.78584 12.0388C6.14952 13.3513 7.95347 14.1117 9.90121 14.2033C8.98674 15.1033 7.67813 15.6445 6.29289 15.6445ZM11.3202 7.76953C11.7086 7.76953 12.0234 8.08429 12.0234 8.47266C12.0234 8.86102 11.7086 9.17578 11.3202 9.17578H7.10148C6.71312 9.17578 6.39836 8.86102 6.39836 8.47266C6.39836 8.08429 6.71312 7.76953 7.10148 7.76953H11.3202ZM13.4296 6.36328H7.10148C6.71312 6.36328 6.39836 6.04852 6.39836 5.66016C6.39836 5.27179 6.71312 4.95703 7.10148 4.95703H13.4296C13.818 4.95703 14.1327 5.27179 14.1327 5.66016C14.1327 6.04852 13.818 6.36328 13.4296 6.36328Z" fill="white"/>
                    
                    <defs>
                    
                    <rect width="18" height="18" fill="white"/>
                    
                    </defs>
                </svg>
            )
        case 'test' :
            return(
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6229 13.1133H10.5487C10.1604 13.1133 9.84558 13.4281 9.84558 13.8164C9.84558 14.2047 10.1604 14.5195 10.5487 14.5195H12.6229C13.0113 14.5195 13.326 14.2047 13.326 13.8164C13.326 13.4281 13.0113 13.1133 12.6229 13.1133Z" fill="white"/>
                <path d="M12.6229 8.85938H10.5487C10.1604 8.85938 9.84558 9.17416 9.84558 9.5625C9.84558 9.95084 10.1604 10.2656 10.5487 10.2656H12.6229C13.0113 10.2656 13.326 9.95084 13.326 9.5625C13.326 9.17416 13.0113 8.85938 12.6229 8.85938Z" fill="white"/>
                <path d="M15.4316 12.375C15.82 12.375 16.1348 12.0602 16.1348 11.6719V2.8125C16.1348 1.26169 14.8731 0 13.3223 0H4.67773C3.12692 0 1.86523 1.26169 1.86523 2.8125V15.1875C1.86523 16.7383 3.12692 18 4.67773 18H13.3222C14.8731 18 16.1347 16.7383 16.1348 15.1875C16.1348 14.7992 15.82 14.4844 15.4316 14.4844C15.0433 14.4844 14.7285 14.7992 14.7285 15.1875C14.7285 15.9629 14.0977 16.5938 13.3223 16.5938H4.67773C3.90233 16.5938 3.27148 15.9629 3.27148 15.1875V2.8125C3.27148 2.03709 3.90233 1.40625 4.67773 1.40625H13.3223C14.0977 1.40625 14.7285 2.03709 14.7285 2.8125V11.6719C14.7285 12.0602 15.0433 12.375 15.4316 12.375Z" fill="white"/>
                <path d="M8.99275 2.79779C8.69342 2.5505 8.25021 2.59262 8.00288 2.89201L6.48396 4.73044L5.88461 4.11496C5.61373 3.83677 5.16855 3.83083 4.89032 4.10174C4.61213 4.37265 4.60619 4.8178 4.8771 5.09603L5.63135 5.87063C5.63757 5.87702 5.6439 5.88328 5.65037 5.88944C5.87828 6.10638 6.18249 6.22704 6.49542 6.22704C6.52228 6.22697 6.54931 6.22609 6.57631 6.22426C6.91539 6.20166 7.23205 6.03755 7.44604 5.77377L9.08696 3.78769C9.33432 3.4883 9.29214 3.04512 8.99275 2.79779Z" fill="white"/>
                <path d="M8.99262 11.3715C8.6933 11.1242 8.25008 11.1664 8.00276 11.4657L6.48341 13.3046L5.88311 12.6916C5.61139 12.4141 5.16624 12.4095 4.88879 12.6812C4.61133 12.9529 4.60669 13.3981 4.87835 13.6755L5.63259 14.4457C5.63835 14.4516 5.64422 14.4574 5.6502 14.4631C5.87812 14.6801 6.18236 14.8008 6.49529 14.8008C6.52218 14.8007 6.54918 14.7998 6.57618 14.798C6.91523 14.7754 7.23188 14.6113 7.44592 14.3475L9.08684 12.3614C9.3342 12.062 9.29201 11.6188 8.99262 11.3715Z" fill="white"/>
                <path d="M12.6229 4.53516H10.5487C10.1604 4.53516 9.84558 4.84995 9.84558 5.23828C9.84558 5.62662 10.1604 5.94141 10.5487 5.94141H12.6229C13.0113 5.94141 13.326 5.62662 13.326 5.23828C13.326 4.84995 13.0113 4.53516 12.6229 4.53516Z" fill="white"/>
                <path d="M8.99262 7.11762C8.6933 6.8703 8.25008 6.91249 8.00276 7.21184L6.48341 9.05075L5.88311 8.4377C5.61139 8.16025 5.16624 8.15561 4.88879 8.42729C4.61133 8.69898 4.60669 9.14416 4.87835 9.42162L5.63259 10.1919C5.63835 10.1977 5.64422 10.2035 5.6502 10.2092C5.87812 10.4262 6.18236 10.5469 6.49529 10.5469C6.52218 10.5468 6.54918 10.5459 6.57618 10.5441C6.91523 10.5215 7.23188 10.3574 7.44592 10.0936L9.08684 8.10751C9.3342 7.80812 9.29201 7.36494 8.99262 7.11762Z" fill="white"/>
                </svg>
            )
        case 'book' :
            return(
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                
                <path d="M17.2969 7.8047C17.6852 7.8047 18 7.48991 18 7.10158V1.75783C18 1.53701 17.8963 1.32902 17.7199 1.1962C17.5435 1.06335 17.315 1.02106 17.1028 1.08202C16.2884 1.31591 15.2503 1.24992 13.9361 1.16632C13.1132 1.11401 12.1805 1.0547 11.1094 1.0547C10.27 1.0547 9.51579 1.42483 9.00001 2.00986C8.48423 1.42483 7.73006 1.0547 6.89063 1.0547C5.81953 1.0547 4.88683 1.11401 4.06393 1.16636C2.74976 1.24992 1.71166 1.31591 0.897267 1.08205C0.684994 1.02109 0.456513 1.06338 0.280099 1.19624C0.10372 1.32906 9.55296e-06 1.53704 9.55296e-06 1.75783V13.4225C-0.00192404 14.1751 0.289732 14.883 0.821189 15.4159C1.35272 15.9488 2.05988 16.2422 2.81251 16.2422H8.29688C8.29688 16.6305 8.61167 16.9453 9.00001 16.9453C9.38835 16.9453 9.70313 16.6305 9.70313 16.2422H15.1875C16.7383 16.2422 18 14.9805 18 13.4297V10.6172C18 10.2289 17.6852 9.91408 17.2969 9.91408C16.9085 9.91408 16.5938 10.2289 16.5938 10.6172C16.5938 11.3926 15.9629 12.0235 15.1875 12.0235H10.0547C9.93432 12.0235 9.81676 12.0357 9.70313 12.0588V3.8672C9.70313 3.09179 10.334 2.46095 11.1094 2.46095C12.1358 2.46095 13.0448 2.51878 13.8468 2.56976C14.8957 2.63645 15.785 2.69298 16.5938 2.60523V7.10158C16.5938 7.48991 16.9085 7.8047 17.2969 7.8047ZM8.29688 14.836H2.81251C2.4362 14.836 2.0826 14.6892 1.81685 14.4228C1.5511 14.1564 1.40531 13.8024 1.40626 13.4243V13.0513C1.82029 13.2915 2.30042 13.4297 2.81251 13.4297H7.94532C8.13917 13.4297 8.29688 13.5874 8.29688 13.7813V14.836ZM8.29688 12.0588C8.18326 12.0357 8.0657 12.0235 7.94532 12.0235H2.81251C2.0371 12.0235 1.40626 11.3926 1.40626 10.6172V2.60527C2.21496 2.69298 3.10438 2.63645 4.15319 2.56976C4.95521 2.51878 5.86421 2.46095 6.89063 2.46095C7.66604 2.46095 8.29688 3.09179 8.29688 3.8672V12.0588ZM10.0547 13.4297H15.1875C15.6996 13.4297 16.1797 13.2915 16.5938 13.0513V13.4297C16.5938 14.2051 15.9629 14.836 15.1875 14.836H9.70313V13.7813C9.70313 13.5874 9.86088 13.4297 10.0547 13.4297Z" fill="white"/>
                
                <defs>
                
                <rect width="18" height="18" fill="white"/>
                
                </defs>
                </svg>
            )
        default:
            return(
                <svg></svg>
            )
    }
}