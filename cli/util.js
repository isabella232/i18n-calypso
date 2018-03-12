/**
 * Module dependencies/
 */
const fs = require( 'fs' );

/**
 * Reads the inputFiles and concat all their content into one string.

 * @param  {string} inputFiles location of the javascript file to parse
 * @returns {string} the concattenated file contentses
 */
function concatAllFiles( inputFiles ) {
	return inputFiles.map( function( inputFile ) {
		return fs.readFileSync( inputFile, 'utf8' );
	} ).join( '\n' );
}

module.exports = {
	concatAllFiles: concatAllFiles,
};
