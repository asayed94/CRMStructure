import { KinesisStreamEvent, Context } from 'aws-lambda'

export default class App extends Object {
  public logger: any

  constructor(logger:any) {
    super()
    this.logger = logger
  }

  static getHandler(): (event: KinesisStreamEvent, context: Context) => Promise<void> {
    const app = new App(null)
    return app.handler.bind(app)
  }

  public async handler(event: KinesisStreamEvent, context: Context): Promise<void> {
    // TODO: Some staff here
  }
}
