import { useState } from "react"

export const Form = () => {
  const [loading, setLoading] = useState(false)
  const [wasSuccessful, toggleSuccessMessage] = useState(null)
  const [hasError, toggleErrorMessage] = useState(null)

  const handleFormSubmission = async (event) => {
    if (loading) return
    event.preventDefault()

    const name = event?.target?.name?.value?.trim()
    const email = event?.target?.email?.value?.trim()
    const role = event?.target?.role?.value?.trim()
    const business = event?.target?.business?.value?.trim()

    try {
      const res = await fetch("/api/register", {
        body: JSON.stringify({
          name,
          email,
          role,
          business,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })

      if (res.status !== 200 || res.statusText !== "OK") {
        throw Error("Status is not ok")
      }

      const data = await res.json()
      toggleSuccessMessage("We got your input thanks!")
      toggleErrorMessage(null)
    } catch (error) {
      toggleSuccessMessage(false)
      toggleErrorMessage("There was a problem")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleFormSubmission}
      className="grid grid-cols-1 md:grid-cols-2 gap-x-4"
    >
      <div className="pt-4 col-span-1">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          First &amp; Last name:
        </label>
        <div className="mt-1">
          <input
            required
            type="text"
            name="name"
            id="name"
            autoComplete="given-name"
            className="pl-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-700 border rounded-md"
          />
        </div>
      </div>
      <div className="pt-4 col-span-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address:
        </label>
        <div className="mt-1">
          <input
            required
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="pl-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-700 border rounded-md"
          />
        </div>
      </div>
      <div className="pt-4 col-span-1">
        <label
          htmlFor="role"
          className="block text-sm font-medium text-gray-700"
        >
          What is your role:
        </label>
        <div className="mt-1">
          <input
            required
            type="text"
            name="role"
            id="role"
            autoComplete="given-name"
            className="pl-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-700 border rounded-md"
          />
        </div>
      </div>
      <div className="pt-4 col-span-1">
        <label
          htmlFor="business"
          className="block text-sm font-medium text-gray-700"
        >
          Tell us about your Business!
        </label>
        <div className="mt-1">
          <textarea
            id="business"
            name="business"
            rows={3}
            className="pl-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-700 border rounded-md"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="pt-4 col-span-1 pb-4">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
