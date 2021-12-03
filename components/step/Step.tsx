/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid'

// const steps = [
//   { id: '01', name: 'Job details', href: '#', status: 'complete' },
//   { id: '02', name: 'Application form', href: '#', status: 'current' },
//   { id: '03', name: 'Preview', href: '#', status: 'upcoming' },
// ]

const steps = [
  { id: '1', name: 'Services Offered', order: 1 },
  { id: '2', name: 'Schedule Management', order: 2 },
  { id: '3', name: 'Publish', order: 3 },
]

type StepProps = {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

export const Step = ({ currentStep }: StepProps) => {
  return (
    <nav aria-label="Progress">
      <ol
        role="list"
        className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0"
      >
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex-1 md:flex">
            {step.order < currentStep ? (
              <div className="group flex items-center w-full">
                <span className="px-6 py-4 flex items-center text-sm font-medium">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-limeade rounded-full ">
                    <CheckIcon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {step.name}
                  </span>
                </span>
              </div>
            ) : step.order === currentStep ? (
              <div
                // href={step.href}
                className="px-6 py-4 flex items-center text-sm font-medium"
                aria-current="step"
              >
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-limeade rounded-full">
                  <span className="text-limeade">{step.id}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-limeade whitespace-nowrap">
                  {step.name}
                </span>
              </div>
            ) : (
              <div className="group flex items-center">
                <span className="px-6 py-4 flex items-center text-sm font-medium">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full ">
                    <span className="text-gray-500 ">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500  whitespace-nowrap">
                    {step.name}
                  </span>
                </span>
              </div>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div
                  className="hidden md:block absolute top-0 right-0 h-full w-5"
                  aria-hidden="true"
                >
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// import { CheckCircleIcon } from '@heroicons/react/outline'

// const steps = [
//   { name: 'Services Offered', order: 1 },
//   { name: 'Schedule Management', order: 2 },
//   { name: 'Publish', order: 3 },
// ]

// type StepProps = {
//   currentStep: number
//   setCurrentStep: React.Dispatch<React.SetStateAction<number>>
// }

// export const Step = ({ currentStep, setCurrentStep }: StepProps) => {
//   return (
//     <div className="">
//       <nav className="flex justify-center items-center" aria-label="Progress">
//         <ol className="flex space-x-3 sm:space-x-6">
//           {steps.map((step) => (
//             <li key={step.name}>
//               {currentStep > step.order ? (
//                 <button
//                   onClick={() => setCurrentStep(step.order)}
//                   className="group"
//                 >
//                   <span className="flex items-start">
//                     <span className="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
//                       <CheckCircleIcon
//                         className="h-full w-full text-primary-600 group-hover:text-primary-800"
//                         aria-hidden="true"
//                       />
//                     </span>
//                     <span className="ml-2.5 text-sm font-medium text-gray-500 group-hover:text-gray-900 whitespace-nowrap">
//                       {step.name}
//                     </span>
//                   </span>
//                 </button>
//               ) : currentStep === step.order ? (
//                 <div className="flex items-start" aria-current="step">
//                   <span
//                     className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
//                     aria-hidden="true"
//                   >
//                     <span className="absolute h-4 w-4 rounded-full bg-primary-200" />
//                     <span className="relative block w-2 h-2 bg-primary-600 rounded-full" />
//                   </span>
//                   <span className="ml-2.5 text-sm font-medium text-primary-600 whitespace-nowrap">
//                     {step.name}
//                   </span>
//                 </div>
//               ) : (
//                 <div className="group">
//                   <div className="flex items-start">
//                     <div
//                       className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
//                       aria-hidden="true"
//                     >
//                       <div className="h-2 w-2 bg-gray-300 rounded-full" />
//                     </div>
//                     <p className="ml-2.5 text-sm font-medium text-gray-500 whitespace-nowrap">
//                       {step.name}
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ol>
//       </nav>
//     </div>
//   )
// }
