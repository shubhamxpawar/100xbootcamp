import { Command } from "@oclif/core";
import { Args } from "@oclif/core";
import { readFile } from "fs/promises";

export class Count extends Command {
    static args = {
        filePath: Args.file({
            description: 'Path to the input file',
            required: true, 
            exists: true,   
        }),
    }
    static description = 'count the characters'
    static examples = []
    static flags = {}

    async run(): Promise<void> {
        try {
            const {args} = await this.parse(Count)
            this.log(`${args.filePath} : `)

            const {wc, cc} = await this.countWordsAndChar(args.filePath)

            this.log(`total number of words are : ${wc}`)
            this.log(`total number of characters are : ${cc}`)
        } catch (error) {
            this.error("couldnt parse this file ")
        }
    }

    async countWordsAndChar(file) {
        const text : string = await readFile(file, {encoding : 'utf-8'})

        const words = text.trim().split(/\s+/)

        const wc = words.length
        const cc = text.length

        // console.log(wc, cc)
        return {wc, cc}
    }
}