import React from 'react'

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bxl-mongodb"></i>
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-nodejs"></i>
                        <div>
                            <h3 className="skills__name">NodeJS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-lock-open-alt"></i>
                        <div>
                            <h3 className="skills__name">PassportJS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-cloud"></i>
                        <div>
                            <h3 className="skills__name">REST API</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-github"></i>
                        <div>
                            <h3 className="skills__name">GitHub</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-data"></i>
                        <div>
                            <h3 className="skills__name">SQL</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend