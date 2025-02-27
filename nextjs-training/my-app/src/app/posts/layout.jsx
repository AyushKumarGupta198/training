export default function postLayout({
    children,
  }) {
    return (
    <div className="mt-16 h-full">
    <h1 className="text-center text-xl bg-red-200 text-black font-bold h-12 w-full pt-2 fixed top-16 left-0 z-20 ">Welcome to Posts Page</h1>
    <section>
        {children}
    </section>
    </div>
    );
  }