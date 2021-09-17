
import { ADD_USER, CHECK_USER, NEW_BATTLE, NEW_BATTLE2} from "../action"
import pic from '../../images/batle2.jpg'
import pic2 from '../../images/battle1.jpg'
import pic3 from '../../images/battle3.jpg'
import pic4 from '../../images/battle4.jpg'
import pic5 from '../../images/battle5.jpg'
import pic6 from '../../images/battle6.jpg'
import picFilm from '../../images/film1.jpg'
import picFilm2 from '../../images/film2.jpg'

export const UsersAll={
    users: [],
    chekingUser: false,
    picDataAnime: [[pic, pic2], [pic3, pic4], [pic5, pic6]],
    titleDataAnime: [
        ['Клинок рассекающий демонов первый сезон', 'Клинок рассекающий демонов фильм'], 
        ['Атака Титанов', 'Наруто: Ураганные хроники'],
        ['Твое имя', 'Унесенные призраками']
    ],
    picDataFilm: [[picFilm, picFilm2]],
    titleDataFilm: [
        ['Интерстеллар', 'Шокаладная фабрика Вилли Вонко']
    ],

    i: 0,
    k: 0,
}

export const User =(state = UsersAll, action)=>{
    switch(action.type){
        case ADD_USER:
            console.log(action.payload)
            return{
                ...state,
                users: [
                    ...state.users,
                    action.payload.map((el)=>(
                         {
                            FirstName: el.FirstName,
                            LastName: el.LastName,
                            Email: el.Email,
                            password: el.password,
                        })
                    ) 
                ]
            }
        case CHECK_USER:
            console.log(state.users[0])
            console.log(action.check)
            let is_choosen = state.users[0].findIndex(
				(item) => (item.Email === action.check.Email) && (item.password === action.check.Password) ,
			)
            
            if(is_choosen === -1){
                return{
                    ...state,
                    chekingUser: false
                }
            }else{
                return{
                    ...state,
                    chekingUser: true
                }
            }
        case NEW_BATTLE:
            return{
                ...state,
                i: state.i + 1,
            }
        case NEW_BATTLE2:
            return{
                ...state,
                k: state.k + 1,
            }

        default: return state
    }
}