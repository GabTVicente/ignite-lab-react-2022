import {CheckCircle, Lock} from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface LessonProps {
    title: string, 
    slug: string,
    availableAt: Date,
    type: 'live' | 'class'
}

export function Lesson(props: LessonProps){
    const { slug } = useParams<{slug: string}>()

    const isLessonAvailable = isPast(props.availableAt) 
    const availableDateFormat = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR,
    })
    
    const isActiveLesson = slug === props.slug

    return(
        <Link to={`/event/lesson/${props.slug}`} className={classNames('group', {
            'cursor-not-allowed': !isLessonAvailable,
            to: '' ,
        })} >
            <span className="text-gray-300">
                {availableDateFormat}
            </span>
            <div className={classNames('rounded border p-4 mt-2 group-hover:border-green-500 transition-colors',{
                'bg-green-500': isActiveLesson,
                'border-gray-500': !isActiveLesson,
            })}>
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? ( 
                    <span className={classNames('flex items-center gap-2 text-sm  font-medium', {
                        'text-white': isActiveLesson,
                        'text-blue-500': !isActiveLesson
                    })}>
                        <CheckCircle size={20}/>Conteúdo Liberado
                    </span>
                    ) : (
                        <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                        <Lock size={20}/>Em breve
                    </span>
                    )}
                    <span className={classNames('text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold', {
                        'border-white': isActiveLesson
                    })}>
                        {props.type === 'live' ? 'AO VIVO' : 'Aula prática'}
                    </span>
                </header>
                <strong className={classNames('text-white mt-5 block',{
                    'text-gray-200': !isActiveLesson
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}