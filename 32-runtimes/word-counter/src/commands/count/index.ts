import { Command } from "@oclif/core";

export class Count extends Command {
    static args = {}
    static description = 'count the characters'
    static examples = []
    static flags = {}

    async run(): Promise<void> {
        await this.parse(Count)
        this.log('This is the count : ')
    }
}