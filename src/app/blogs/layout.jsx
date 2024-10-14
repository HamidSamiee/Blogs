import CategoryList from "./_/components/CategoryList"

const layout = ({children}) => {
  return (
    <div>
        <h1 className="">لیست بلاگ ها</h1>
        <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-secondary-500 space-y-4">
                <CategoryList />
            </div>
            <div className="col-span-12 lg:col-span-8 xl:col-span-9 ">
                {
                    children
                }
            </div>
        </div>
    </div>
  )
}

export default layout