import { DNA } from "react-loader-spinner"

const PageLoader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
        <DNA 
        visible={true}
        height="50"
        width="50"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  )
}

export default PageLoader