export function Testimonial({
  heading,
  description,
  blocks,
}) {
  return (
    <section className="container mx-auto flex px-5 py-8 flex-col items-center">
      <div className='text-center'>
        <div className="max-w-xl">
          {heading?.value && (
            <h1 className="mb-5 text-5xl font-bold">{heading.value}</h1>
          )}
          {description?.value && <p className="mb-5">{description.value}</p>}
        </div>
      </div>
      <div className="flex flex-col items-baseline justify-between gap-4 px-6 py-8 sm:px-8 md:px-12 dark:from-contrast/60 dark:text-primary from-primary/60">
        {blocks.map((testimonial, index) => (
          <div className='text-center' key={index}>
            <svg className="h-5 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
            <div className="block mt-1">{testimonial.review.value}</div>
            <p className="mt-4 font-medium">{testimonial.customer?.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
