import { motion } from 'framer-motion'

export interface IProjectData {
  name: string
  description?: string
  image?: string
  stack?: string[]
  demo?: string
  src?: string
}

interface IProps {
  data: IProjectData
}

export function Project({ data }: IProps) {
  const { name, description, image, stack, demo, src } = data
  return (
    <motion.div className='flex flex-col p-4 m-auto my-8 bg-white rounded-md border-gray-200 shadow-md sm:flex-row md:mx-4 hover:shadow-lg hover:bg-yellow-200'
    initial={{ opacity: 0, scale: 0.4 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className='flex-1 px-4 mb-6'>
        <h3 className='mb-6 text-2xl font-bold text-center'>{name}</h3>
        {description && <p className='mb-6'>{description}</p>}
        {(demo || src) && (
          <p>
            {demo && (
              <a href={demo} className='mr-4 font-bold text-blue-700' target='_blank'>
                demo
              </a>
            )}
            {src && (
              <a href={src} className='font-bold text-blue-700' target='_blank'>
                source
              </a>
            )}
          </p>
        )}
        {stack && <p className='mt-6 text-sm italic font-bold'>{stack.join(', ')}</p>}
      </div>

      {image && (
        <div className='w-[260px] md:w-[320px] lg:w-[400px]'>
          <img src={`/assets/projects/${image}`} alt='{name}' />
        </div>
      )}
    </motion.div>
  )
}
