import { component$, Slot } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <header class='navbar bg-base-100 shadow-sm sticky top-0'>
        <div className='flex gap-2 w-full'>
          <img src='/icon.svg' alt='Your Site' class='w-8 h-8' />
          <h1 class='text-2xl'>Your Site</h1>
        </div>
        {/* put your nav or whatever here */}
      </header>

      <main class='p-2 flex-1 m-auto mb-8'>
        <Slot />
      </main>

      <footer class='bg-base-100 p-2 text-center text-xs fixed bottom-0 w-full'>&copy; Copyright Your Site</footer>
    </>
  )
})
