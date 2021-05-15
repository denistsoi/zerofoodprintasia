import { Config } from "Config"

const { acknowledgements } = Config

export const Acknowledgement = () => (
  <div className="max-w-lg mx-auto">
    <div className="text-xs text-white text-center">
      <p>Credits &amp; Acknowledgement: </p>
      <div>
        {acknowledgements.map((category, categoryIndex) => (
          <span key={`${category.role}-${categoryIndex}`}>
            {category.people.map((person, personIndex) => {
              return (
                <span key={`person-${personIndex}}`}>
                  <a className="text-white" target="_blank" href={person.href}>
                    {person.name}
                  </a>
                  {personIndex + 1 === category.people.length ? "" : ", "}
                </span>
              )
            })}
            <span>
              {" "}
              ({category.role})
              {categoryIndex + 1 === acknowledgements.length ? "" : ", "}{" "}
            </span>
          </span>
        ))}
      </div>
    </div>
  </div>
)
