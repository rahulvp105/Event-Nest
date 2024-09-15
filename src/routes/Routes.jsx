import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EventDetails from '../pages/EventDetails/EventDetails'
import EventList from '../pages/EventList/EventList'
import FilterEvents from '../pages/FilterEvents/FilterEvents'
import Stalls from '../components/Stalls'



function RoutesProvider() {
    return (
        <>
               <BrowserRouter>
      <Routes>
        <Route path='/' element={<EventList />}></Route>
        <Route path='/find-events' element={<FilterEvents />}></Route>
        <Route path='/events/:id' element={<EventDetails />}></Route>
        <Route path='/stall' element={<Stalls />}></Route>
      </Routes>
      </BrowserRouter>
        </>
    )
}

export default RoutesProvider
