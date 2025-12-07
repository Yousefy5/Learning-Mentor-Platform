import { ProgressProvider } from '../context/ProgressContext';
import LessonContent from './LessonContent';
import Content from '../../pages/Content';
import Dashboard from '../../pages/Dashboard'
function App (){
return(<ProgressProvider>
    <Dashboard />
    <Content />
    <LessonContent />
    </ProgressProvider>)

}